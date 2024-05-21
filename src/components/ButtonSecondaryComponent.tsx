import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
import {gapNumber} from '../utils/spacing';

interface Props {
  onPress?: () => void;
  type?: 'text' | 'icon' | 'both';
  styleContainer?: StyleProp<ViewStyle>;
  text?: string;
  childrenIcon?: ReactNode;
  fontSize?: number;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  fontFamily?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}
const ButtonSecondaryComponent = ({
  onPress,
  type = 'text',
  styleContainer,
  childrenIcon,
  text,
  fontSize = FONTSIZE.size_12,
  color = COLORS.primaryWhiteHex,
  backgroundColor,
  fontFamily = FONT_FAMILY.montserrat_semibold,
  iconRight,
  iconLeft,
}: Props) => {
  if (type === 'icon') {
    return (
      <TouchableOpacity
        style={[
          globalStyles.buttonIconSecondary,
          globalStyles.center,
          {
            backgroundColor,
          },
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
        <TextComponent text={text} />
      </TouchableOpacity>
    );
  }
  if (type === 'both') {
    return (
      <TouchableOpacity
        style={[
          globalStyles.buttonBoth,
          {
            backgroundColor,
          },
          styleContainer,
        ]}>
        {iconLeft && iconLeft}
        <TextComponent
          numberOfLines={1}
          text={text}
          fontSize={fontSize}
          color={color}
          fontFamily={fontFamily}
        />
        {iconRight && iconRight}
      </TouchableOpacity>
    );
  }
};

export default ButtonSecondaryComponent;
