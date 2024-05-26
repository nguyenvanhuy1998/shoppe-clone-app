import React from 'react';
import {
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../../../constants';
import {globalStyles} from '../../../styles';
import TextComponent from '../../../components/TextComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: 'primary' | 'text';
  backgroundColor?: ColorValue;
  color?: ColorValue;
  fontSize?: number;
  fontFamily?: string;
  icon?: string;
  iconSize?: number;
  iconColor?: ColorValue;
  disabled?: boolean;
}
const ButtonAuth = ({
  text = '',
  onPress,
  style,
  type,
  backgroundColor = COLORS.primaryWhiteHex,
  color = COLORS.primaryOrangeHex,
  fontSize = FONTSIZE.size_16,
  fontFamily = FONT_FAMILY.montserrat_bold,
  icon,
  iconSize,
  iconColor,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        type === 'text' ? globalStyles.buttonText : globalStyles.button,
        {
          backgroundColor,
        },
        style,
      ]}
      onPress={onPress}>
      {icon ? (
        <FontAwesome name={icon} size={iconSize} color={iconColor} />
      ) : (
        <TextComponent
          text={text}
          color={color}
          fontSize={fontSize}
          fontFamily={fontFamily}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonAuth;
