import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const DrawerCustom = (props: DrawerContentComponentProps) => {
  console.log(props);
  // Define the content of the drawer here
  return (
    <View>
      <Text>123</Text>
    </View>
  );
};

export default DrawerCustom;

const styles = StyleSheet.create({});
