import React, {ReactNode} from 'react';
import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
import Ionicons from './Ionicons';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import SpaceComponent from './SpaceComponent';
import {IconSizeProps} from '../types/utils.type';

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
  nameIcon?: string;
  colorIcon?: ColorValue;
  sizeIcon?: IconSizeProps['iconSizes'];
}
const ButtonSecondaryComponent = ({
  onPress,
  type = 'text',
  styleContainer,
  childrenIcon,
  text,
  fontSize = FONTSIZE.size_12,
  color = COLORS.primaryWhiteHex,
  backgroundColor = COLORS.primaryOrangeHex,
  fontFamily = FONT_FAMILY.montserrat_semibold,
  nameIcon,
  colorIcon,
  sizeIcon,
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
        <TextComponent
          numberOfLines={1}
          text={text}
          fontSize={fontSize}
          color={color}
          fontFamily={fontFamily}
        />
        <SpaceComponent width={SPACING.space_4} />
        {nameIcon && (
          <Ionicons name={nameIcon} color={colorIcon} size={sizeIcon} />
        )}
      </TouchableOpacity>
    );
  }
};

export default ButtonSecondaryComponent;
