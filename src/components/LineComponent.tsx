import React from 'react';
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../constants';

interface Props {
  width: DimensionValue;
  height: DimensionValue;
  style?: StyleProp<ViewStyle>;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}
const LineComponent = ({
  width,
  height,
  left,
  right,
  top,
  bottom,
  style,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          marginLeft: left,
          marginRight: right,
          marginTop: top,
          marginBottom: bottom,
        },
        style,
      ]}
    />
  );
};

export default LineComponent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryGreyHex,
  },
});
