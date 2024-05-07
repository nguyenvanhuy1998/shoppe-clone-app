import React, {ReactNode} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  onPress?: () => void;
  type?: 'text' | 'icon' | 'both';
  styleContainer?: StyleProp<ViewStyle>;
  childrenIcon?: ReactNode;
}
const ButtonSecondaryComponent = ({
  onPress,
  type = 'text',
  styleContainer,
  childrenIcon,
}: Props) => {
  if (type === 'icon') {
    return (
      <TouchableOpacity
        style={[
          globalStyles.buttonIconSecondary,
          globalStyles.center,
          styleContainer,
        ]}
        onPress={onPress}>
        {childrenIcon}
      </TouchableOpacity>
    );
  }
  if (type === 'text') {
    return (
      <TouchableOpacity
        style={[globalStyles.buttonText, styleContainer]}
        onPress={onPress}>
        <Text>ButtonSecondaryComponent</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'both') {
    return <View />;
  }
};

export default ButtonSecondaryComponent;
