import React, {ReactNode} from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
import {COLORS} from '../constants';

interface Props extends TouchableOpacityProps {
  styleContainer?: StyleProp<ViewStyle>;
  onPress?: () => void;
  startIcon?: ReactNode;
  text?: string;
  endIcon?: ReactNode;
  badge?: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  backgroundColor?: ColorValue;
}
const Button = ({
  styleContainer,
  startIcon,
  text,
  endIcon,
  fontSize,
  color,
  fontFamily,
  backgroundColor,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        globalStyles.buttonContainer,
        {
          backgroundColor: backgroundColor,
        },
        styleContainer,
      ]}>
      {startIcon && startIcon}
      {text && (
        <TextComponent
          text={text}
          fontSize={fontSize}
          color={color}
          fontFamily={fontFamily}
        />
      )}
      {endIcon && endIcon}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
