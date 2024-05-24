import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import Row from './Row';

interface Props extends TextInputProps {
  styleContainer?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  styleInput?: StyleProp<TextStyle>;
  rightIcon?: ReactNode;
}
const Input = ({
  leftIcon,
  rightIcon,
  styleContainer,
  styleInput,
  ...rest
}: Props) => {
  return (
    <Row style={[globalStyles.inputContainer, styleContainer]}>
      {leftIcon && leftIcon}
      <TextInput style={[globalStyles.input, styleInput]} {...rest} />
      {rightIcon && rightIcon}
    </Row>
  );
};

export default Input;

const styles = StyleSheet.create({});
