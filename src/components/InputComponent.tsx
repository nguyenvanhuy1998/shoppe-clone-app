import React, {ReactNode, useState} from 'react';
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import RowComponent from './RowComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from './MaterialIcons';

interface Props {
  style?: StyleProp<ViewStyle>;
  label?: string;
  rules?: RegisterOptions;
  control: Control<any>;
  name: string;
  placeholder?: string;
  styleInputContainer?: StyleProp<ViewStyle>;
  iconLeft?: ReactNode;
  styleInput?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  isPassword?: boolean;
  iconRight?: ReactNode;
  allowClear?: boolean;
  error?: string;
}
const InputComponent = ({
  label,
  style,
  rules,
  control,
  name,
  placeholder,
  styleInputContainer,
  iconLeft,
  styleInput,
  keyboardType = 'default',
  isPassword,
  iconRight,
  allowClear,
  error,
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
        rules={rules}
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <RowComponent
              style={[globalStyles.inputContainer, styleInputContainer]}>
              {iconLeft && iconLeft}
              <TextInput
                style={[globalStyles.text, globalStyles.flexOne, styleInput]}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={isShowPass}
                autoCapitalize="none"
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
                    size={SPACING.space_18}
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
