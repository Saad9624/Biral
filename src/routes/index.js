import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './authStack';
import BottomBarStack from './bottomBarStack' ;

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen
          options={{header: () => null}}
          name="Auth Stack"
          component={AuthStack}
        
        />

        <Stack.Screen
          options={{header: () => null}}
          name="Bottom Stack"
          component={BottomBarStack}
        
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
