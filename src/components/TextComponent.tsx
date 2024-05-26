import React from 'react';
import {ColorValue, StyleProp, Text, TextStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';
import {TextProps} from 'react-native';

interface Props extends TextProps {
  text?: string | number;
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: number;
  numberOfLines?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}
const TextComponent = ({
  text = '',
  color = COLORS.primaryBlackHex,
  style,
  fontSize = FONTSIZE.size_12,
  fontFamily = FONT_FAMILY.montserrat_regular,
  lineHeight,
  textAlign,
  ...rest
}: Props) => {
  return (
    <Text
      {...rest}
      style={[
        {
          color,
          fontSize,
          fontFamily,
          lineHeight,
          textAlign,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
