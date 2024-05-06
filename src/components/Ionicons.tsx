import {View, Text, ColorValue} from 'react-native';
import React from 'react';
import {IconSizeProps} from '../types/utils.type';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconSizes} from '../constants';

interface Props {
  name: string;
  size: IconSizeProps['iconSizes'];
  color: ColorValue;
  onPress?: () => void;
}
const Ionicons = ({name, size, color, onPress}: Props) => {
  return (
    <Icon name={name} size={IconSizes[size]} color={color} onPress={onPress} />
  );
};

export default Ionicons;
