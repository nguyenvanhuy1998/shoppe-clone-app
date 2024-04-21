import React from 'react';
import {ColorValue, StyleProp, Text, TextStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';

interface Props {
  text: string;
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontFamily?: string;
}
const TextComponent = ({
  text,
  color = COLORS.primaryBlackHex,
  style,
  fontSize = FONTSIZE.size_14,
  fontFamily = FONT_FAMILY.montserrat_regular,
}: Props) => {
  return (
    <Text
      style={[
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
