import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {BORDER_RADIUS, COLORS, FONT_FAMILY, FONTSIZE} from '../constants';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';

interface Props {
  onPress?: () => void;
  styleContainer?: StyleProp<ViewStyle>;
  text?: string;
  fontSize?: number;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  fontFamily?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  radius?: number;
}
const ButtonSecondaryComponent = ({
  onPress,
  styleContainer,
  text,
  fontSize = FONTSIZE.size_12,
  color = COLORS.primaryWhiteHex,
  backgroundColor,
  fontFamily = FONT_FAMILY.montserrat_semibold,
  iconRight,
  iconLeft,
  radius = BORDER_RADIUS.radius_4,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.buttonBoth,
        globalStyles.center,
        globalStyles.row,
        {
          backgroundColor,
          borderRadius: radius,
        },
        styleContainer,
      ]}>
      {iconLeft && iconLeft}
      {text && (
        <TextComponent
          numberOfLines={1}
          text={text}
          fontSize={fontSize}
          color={color}
          fontFamily={fontFamily}
        />
      )}

      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default ButtonSecondaryComponent;
