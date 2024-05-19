import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import TabNavigator from './TabNavigator';
import {ProductDetailScreen} from '../screens';
import {Product} from '../types/product.type';
export type MainNavigatorParamList = {
  Main: undefined;
  Home: undefined;
  ProductDetail: {
    product: Product;
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
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
