import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {ProductListScreen} from '../screens';
import {DrawerCustom} from '../components';

export type DrawerNavigatorParamList = {
  ProductList: {
    searchText: string;
  };
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
      }}
      drawerContent={DrawerCustom}>
      <Drawer.Screen name="ProductList" component={ProductListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
