import React from 'react';
import {ColorValue} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export const IconSizes = {
  small: 14,
  medium: 18,
  large: 24,
  extraLarge: 28,
};
export type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};
interface Props {
  name: string;
  size: IconSizeProps['iconSizes'];
  color: ColorValue;
  onPress?: () => void;
}
const MaterialIcons = ({name, size, color, onPress}: Props) => {
  return (
    <Icon name={name} size={IconSizes[size]} color={color} onPress={onPress} />
  );
};

export default MaterialIcons;
