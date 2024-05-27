import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const Row = ({children, style, onPress}: Props) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={[globalStyles.row, style]}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[globalStyles.row, style]}>{children}</View>;
};

export default Row;
