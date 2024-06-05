import React, {forwardRef, ReactNode} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import Row from './Row';
import TextComponent from './TextComponent';
import {COLORS, FONTSIZE, SPACING} from '../constants';
import {gapNumber} from '../utils/spacing';

interface Props extends TextInputProps {
  styleContainer?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  styleInput?: StyleProp<TextStyle>;
  rightIcon?: ReactNode;
  onPress?: () => void;
  errorMessage?: string;
}
const Input = forwardRef<TextInput, Props>(
  (
    {
      styleContainer,
      leftIcon,
      styleInput,
      rightIcon,
      errorMessage,
      onPress,
      ...rest
    },
    ref,
  ) => {
    return (
      <View style={[globalStyles.flexOne, gapNumber(SPACING.space_4)]}>
        <Row style={[globalStyles.inputContainer, styleContainer]}>
          {leftIcon && leftIcon}
          <TouchableOpacity onPress={onPress} style={globalStyles.flexOne}>
            <TextInput
              ref={ref}
              style={[globalStyles.input, styleInput]}
              {...rest}
            />
          </TouchableOpacity>
          {rightIcon && rightIcon}
        </Row>
        {errorMessage && (
          <TextComponent
            text={errorMessage}
            fontSize={FONTSIZE.size_10}
            color={COLORS.primaryRedHex}
          />
        )}
      </View>
    );
  },
);
export default Input;
