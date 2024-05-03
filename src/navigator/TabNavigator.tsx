import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen, ProfileScreen} from '../screens';
export type TabNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<TabNavigatorParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
