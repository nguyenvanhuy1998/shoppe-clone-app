import React from 'react';
import {ColorValue, StyleProp, View, ViewStyle} from 'react-native';
interface Props {
  width?: number;
  height?: number;
  backgroundColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
}
const SpaceComponent = ({width, height, backgroundColor, style}: Props) => {
  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor,
        },
        style,
      ]}
    />
  );
};

export default SpaceComponent;
