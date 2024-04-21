import React from 'react';
import {
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: 'primary' | 'text';
  backgroundColor?: ColorValue;
  color?: ColorValue;
  fontSize?: number;
  fontFamily?: string;
}
const ButtonComponent = ({
  text,
  onPress,
  style,
  type,
  backgroundColor = COLORS.primaryWhiteHex,
  color = COLORS.primaryOrangeHex,
  fontSize = FONTSIZE.size_16,
  fontFamily = FONT_FAMILY.montserrat_bold,
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
      <TextComponent
        text={text}
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
