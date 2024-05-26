import React, {ReactNode} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import Row from './Row';

interface Props extends TextInputProps {
  styleContainer?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  styleInput?: StyleProp<TextStyle>;
  rightIcon?: ReactNode;
  onPress?: () => void;
}
const Input = ({
  leftIcon,
  rightIcon,
  styleContainer,
  styleInput,
  onPress,
  ...rest
}: Props) => {
  return (
    <Row style={[globalStyles.inputContainer, styleContainer]}>
      {leftIcon && leftIcon}
      <TouchableOpacity onPress={onPress} style={globalStyles.flexOne}>
        <TextInput style={[globalStyles.input, styleInput]} {...rest} />
      </TouchableOpacity>
      {rightIcon && rightIcon}
    </Row>
  );
};

export default Input;
