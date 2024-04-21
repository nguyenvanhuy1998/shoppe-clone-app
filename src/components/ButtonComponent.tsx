import React from 'react';
import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../constants';
import {globalStyles} from '../styles';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: 'primary' | 'text';
  backgroundColor?: ColorValue;
  color?: ColorValue;
}
const ButtonComponent = ({
  text,
  onPress,
  style,
  type,
  textStyle,
  backgroundColor = COLORS.primaryWhiteHex,
  color = COLORS.primaryOrangeHex,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        type === 'text' ? globalStyles.buttonText : globalStyles.button,
        {
          backgroundColor,
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          globalStyles.text,
          {
            color,
          },
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
