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
import RowComponent from './RowComponent';
import {View} from 'react-native';

interface Props extends TextInputProps {
  styleContainer?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  styleInput?: StyleProp<TextStyle>;
  rightIcon?: ReactNode;
}
const InputComponent = ({
  leftIcon,
  rightIcon,
  styleContainer,
  styleInput,
  ...rest
}: Props) => {
  return (
    <RowComponent style={[globalStyles.inputContainer, styleContainer]}>
      {leftIcon && leftIcon}
      <TextInput style={[globalStyles.input, styleInput]} {...rest} />
      {rightIcon && rightIcon}
    </RowComponent>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
