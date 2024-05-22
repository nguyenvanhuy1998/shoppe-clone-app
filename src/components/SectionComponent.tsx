import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
const SectionComponent = ({children, style}: Props) => {
  return <View style={[globalStyles.sectionSecondary, style]}>{children}</View>;
};

export default SectionComponent;
