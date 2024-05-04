import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const RowComponent = ({children, style}: Props) => {
  return <View style={[globalStyles.row, style]}>{children}</View>;
};

export default RowComponent;
