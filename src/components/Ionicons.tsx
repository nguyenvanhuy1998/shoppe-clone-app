import React from 'react';
import {ColorValue} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconSizes} from '../constants';
import {IconSizeProps} from '../types/utils.type';

interface Props {
  name: string;
  size?: IconSizeProps['iconSizes'];
  color?: ColorValue;
  onPress?: () => void;
}
const Ionicons = ({name, size = 'medium', color, onPress}: Props) => {
  return (
    <Icon name={name} size={IconSizes[size]} color={color} onPress={onPress} />
  );
};

export default Ionicons;
