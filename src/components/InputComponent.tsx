import React, {ReactNode, useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import {globalStyles} from '../styles';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import Ionicons from './Ionicons';

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  control: Control<any>;
  name: string;
  styleInputContainer?: StyleProp<ViewStyle>;
  iconLeft?: ReactNode;
  styleInput?: StyleProp<TextStyle>;
  isPassword?: boolean;
  iconRight?: ReactNode;
  allowClear?: boolean;
  error?: string;
}
const InputComponent = ({
  label,
  style,
  control,
  name,
  styleInputContainer,
  iconLeft,
  styleInput,
  isPassword,
  iconRight,
  allowClear,
  error,
  ...props
}: Props) => {
  const [isShowPass, setIsShowPass] = useState(isPassword);

  return (
    <View style={[styles.container, style]}>
      {label && (
        <TextComponent
          fontFamily={FONT_FAMILY.montserrat_medium}
          text={label}
          style={styles.label}
        />
      )}
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <RowComponent
              style={[globalStyles.inputContainer, styleInputContainer]}>
              {iconLeft && iconLeft}
              <TextInput
                style={[globalStyles.text, globalStyles.flexOne, styleInput]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isShowPass}
                autoCapitalize="none"
                {...props}
              />
              {iconRight && iconRight}
              <TouchableOpacity
                style={[globalStyles.buttonIcon, globalStyles.center]}
                onPress={() =>
                  isPassword ? setIsShowPass(!isShowPass) : onChange('')
                }>
                {isPassword ? (
                  <Ionicons
                    name={isShowPass ? 'eye-off-outline' : 'eye-outline'}
                    size={'medium'}
                    color={COLORS.primaryGreyHex}
                  />
                ) : (
                  value &&
                  value.length > 0 &&
                  allowClear && (
                    <MaterialIcons
                      name="close"
                      size="medium"
                      color={COLORS.primaryBlackHex}
                    />
                  )
                )}
              </TouchableOpacity>
            </RowComponent>
          );
        }}
      />
      {error && (
        <TextComponent
          style={styles.error}
          text={error}
          color={COLORS.primaryDangerousHex}
          fontSize={FONTSIZE.size_12}
        />
      )}
    </View>
  );
};

export default InputComponent;
const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.space_20,
  },
  input: {
    height: '100%',
  },
  label: {
    marginBottom: SPACING.space_8,
  },
  error: {
    marginTop: SPACING.space_8,
  },
});
