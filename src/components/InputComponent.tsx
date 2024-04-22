import React, {ReactNode, useState} from 'react';
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import TextComponent from './TextComponent';
import RowComponent from './RowComponent';
import {globalStyles} from '../styles';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from './MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
  label?: string;
  iconLeft?: ReactNode;
  styleInputContainer?: StyleProp<ViewStyle>;
  iconRight?: ReactNode;
  value: string;
  styleInput?: StyleProp<TextStyle>;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardType;
  isPassword?: boolean;
  allowClear?: boolean;
  error?: string;
}
const InputComponent = ({
  style,
  label,
  iconLeft,
  iconRight,
  styleInputContainer,
  value,
  styleInput,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  isPassword = false,
  allowClear,
  error,
}: Props) => {
  const [isShowPass, setIsShowPass] = useState(isPassword);
  const handleChangeText = (val: string) => {
    onChangeText && onChangeText(val);
  };
  const handleShowPassAndClearText = () => {
    isPassword ? setIsShowPass(!isShowPass) : onChangeText('');
  };
  return (
    <View style={[globalStyles.wrapperInput, style]}>
      {label && (
        <TextComponent
          fontFamily={FONT_FAMILY.montserrat_medium}
          text={label}
          style={styles.labelSpacing}
        />
      )}
      <RowComponent style={[globalStyles.inputContainer, styleInputContainer]}>
        {iconLeft && iconLeft}
        <TextInput
          style={[globalStyles.text, globalStyles.flexOne, styleInput]}
          placeholder={placeholder}
          value={value}
          onChangeText={val => handleChangeText(val)}
          keyboardType={keyboardType}
          secureTextEntry={isShowPass}
          autoCapitalize="none"
        />
        {iconRight && iconRight}
        <TouchableOpacity onPress={handleShowPassAndClearText}>
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
                color={COLORS.primaryGreyHex}
              />
            )
          )}
        </TouchableOpacity>
      </RowComponent>
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
  labelSpacing: {
    marginBottom: SPACING.space_8,
  },
  error: {
    marginTop: SPACING.space_8,
  },
});
