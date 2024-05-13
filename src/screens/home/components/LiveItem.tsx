import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LiveProps} from '../data/live';

const LiveItem = ({item}: {item: LiveProps}) => {
  return (
    <View>
      <Text>LiveItem</Text>
    </View>
  );
};

export default LiveItem;

const styles = StyleSheet.create({});
