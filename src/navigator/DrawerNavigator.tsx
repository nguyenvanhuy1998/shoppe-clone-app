/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {ProductListScreen} from '../screens';
import {AsideFilter} from '../screens/productList/components';
import {SPACING, WIDTH} from '../constants';

export const WIDTH_DRAWER = WIDTH - SPACING.space_32;
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
        drawerStyle: {
          width: WIDTH_DRAWER,
        },
      }}
      drawerContent={() => <AsideFilter />}>
      <Drawer.Screen name="ProductList" component={ProductListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
