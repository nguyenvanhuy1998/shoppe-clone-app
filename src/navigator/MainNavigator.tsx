import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProductDetailScreen, SearchScreen} from '../screens';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
export type MainNavigatorParamList = {
  Main: undefined;
  Home: undefined;
  ProductDetail: {
    id: string;
  };
  Search: undefined;
  Drawer: {
    screen: 'ProductList';
    params: {
      searchText: string;
    };
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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
