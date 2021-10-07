import React,{ useState,useEffect}  from 'react';
import{View, FlatList,ActivityIndicator, Text, StyleSheet } from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';

const CoinsScreen = (props) => {
    const [coins, setcoins] = useState({});
    const [loading, setloading] = useState(false);
    const getData = async () => {
      setloading(true);
      let res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
      setcoins(res.data);
      setloading(false);
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <>
        <View style={style.container}>
          {loading ? (
            <ActivityIndicator style={style.loader} color="white" size="large" />
          ) : null}
          <FlatList
            data={coins}
            renderItem={({item}) => <CoinsItem item={item} />}
          />
        </View>
      </>
    );
  };
  
  const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.charade
    },

    titleText:{
        color:"#fff",
        textAlign:"center"
    },

    btn:{
        padding: 8,
        backgroundColor:"blue",
        borderRadius: 8,
        margin:16
    
    },
    btnText:{
        color:"#fff",
        textAlign:"center"
    }
});



  export default CoinsScreen;





