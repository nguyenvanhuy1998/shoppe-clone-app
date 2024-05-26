import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProductDetailScreen, SearchScreen} from '../screens';
import TabNavigator from './TabNavigator';
export type MainNavigatorParamList = {
  Main: undefined;
  Home: undefined;
  ProductDetail: {
    id: string;
  };
  Search: {
    searchText: string;
  };
};
const Stack = createNativeStackNavigator<MainNavigatorParamList>();
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
