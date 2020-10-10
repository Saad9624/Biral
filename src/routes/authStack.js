import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from '../screens/auth/login' ;
import Verification from '../screens/auth/verification' ;
import Signup from '../screens/auth/signup' ;

const Stack = createStackNavigator();

const  AuthStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
           name="Login"
            component={Login} options={{headerShown: false}} /> 

         <Stack.Screen
           name="Verification"
            component={Verification} options={{headerShown: false}} />

        <Stack.Screen
           name="Signup"
            component={Signup} options={{headerShown: false}} />

        </Stack.Navigator>
    );
  }

  export default AuthStack;