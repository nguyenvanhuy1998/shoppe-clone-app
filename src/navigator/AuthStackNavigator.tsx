import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackNavigatorParamList} from '../types/auth';
import {SignInScreen, SignUpScreen} from '../screens';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
