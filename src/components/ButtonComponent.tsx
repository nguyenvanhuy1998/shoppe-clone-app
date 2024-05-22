import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';

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
}
const ButtonComponent = ({
  styleContainer,
  startIcon,
  text,
  endIcon,
  fontSize,
  color,
  fontFamily,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[globalStyles.buttonContainer, styleContainer]}>
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

export default ButtonComponent;

const styles = StyleSheet.create({});
