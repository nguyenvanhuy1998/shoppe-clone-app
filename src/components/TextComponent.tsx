import React from 'react';
import {ColorValue, StyleProp, Text, TextStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';

interface Props {
  text?: string;
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: number;
  numberOfLines?: number;
}
const TextComponent = ({
  text = '',
  color = COLORS.primaryBlackHex,
  style,
  fontSize = FONTSIZE.size_14,
  fontFamily = FONT_FAMILY.montserrat_regular,
  lineHeight,
  numberOfLines,
}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          color,
          fontSize,
          fontFamily,
          lineHeight,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
