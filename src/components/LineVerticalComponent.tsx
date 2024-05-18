import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, SPACING} from '../constants';

const LineVerticalComponent = () => {
  return <View style={styles.container} />;
};

export default LineVerticalComponent;
const styles = StyleSheet.create({
  container: {
    width: 2,
    height: '65%',
    backgroundColor: COLORS.primaryGreyHex,
    marginLeft: SPACING.space_16,
    marginRight: SPACING.space_12,
  },
});
