import React from 'react';
import {ColorValue} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconSizeProps} from '../types/utils.type';
import {IconSizes} from '../constants';

interface Props {
  name: string;
  size?: IconSizeProps['iconSizes'];
  color?: ColorValue;
  onPress?: () => void;
}
const MaterialIcons = ({name, size = 'medium', color, onPress}: Props) => {
  return (
    <Icon name={name} size={IconSizes[size]} color={color} onPress={onPress} />
  );
};

export default MaterialIcons;
