import React from 'react';
import {ColorValue, StyleProp, Text, TextStyle} from 'react-native';
import {globalStyles} from '../styles';

interface Props {
  text: string;
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontFamily?: string;
}
const TextComponent = ({text, color, style, fontSize, fontFamily}: Props) => {
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color,
          fontSize,
          fontFamily,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
