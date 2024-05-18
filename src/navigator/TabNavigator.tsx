import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {COLORS} from '../constants';
import {FeedScreen, NotificationsScreen, ProfileScreen} from '../screens';
import LiveScreen from '../screens/LiveScreen';
import {Ionicons} from '../components';
import HomeNavigator from './HomeNavigator';
export type TabNavigatorParamList = {
  HomeNavigator: undefined;
  Feed: undefined;
  Live: undefined;
  Notifications: undefined;
  Profile: undefined;
};
interface TabBarIconProps {
  focused: boolean;
  size: number;
  color: string;
}
const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabBarIcon = (focusedIcon: string, unfocusedIcon: string) => {
  return ({focused, color}: TabBarIconProps) => (
    <Ionicons
      name={focused ? focusedIcon : unfocusedIcon}
      size={'large'}
      color={color}
    />
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryOrangeHex,
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: TabBarIcon('home', 'home-outline'),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: TabBarIcon('copy-sharp', 'copy-outline'),
        }}
      />
      <Tab.Screen
        name="Live"
        component={LiveScreen}
        options={{
          tabBarIcon: TabBarIcon('videocam-sharp', 'videocam-outline'),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: TabBarIcon(
            'notifications-sharp',
            'notifications-outline',
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: TabBarIcon('person', 'person-outline'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
