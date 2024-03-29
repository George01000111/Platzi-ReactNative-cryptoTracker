import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetaiilScreen from './CoinDetailScreen';
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
                backgroundColor:Colors.blackPearl,
                shadowColor:Colors.blackPearl
            },
            headerTintColor: Colors.white
          }}
        >
            <Stack.Screen 
              name="Coins" 
              component={CoinsScreen}
            />

            <Stack.Screen 
             name="CoinDetail" 
             component={CoinDetaiilScreen} 
            />
        </Stack.Navigator>
    );
}

export default CoinsStack;