import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../constants';
import ButtonOldComponent from './ButtonOldComponent';
import DotTextComponent from './DotTextComponent';
import Ionicons from './Ionicons';
import {IconSizeProps} from '../types/utils.type';

interface Props {
  iconName: string;
  badgeText: string;
  styleContainer?: StyleProp<ViewStyle>;
  onPress?: () => void;
  sizeIcon?: IconSizeProps['iconSizes'];
}
const ButtonIconWithBadge = ({
  iconName,
  badgeText,
  styleContainer,
  sizeIcon,
  onPress,
}: Props) => (
  <ButtonOldComponent
    styleContainer={styleContainer}
    onPress={onPress}
    iconLeft={
      <>
        <Ionicons
          name={iconName}
          color={COLORS.primaryWhiteHex}
          size={sizeIcon}
        />
        <DotTextComponent text={badgeText} />
      </>
    }
  />
);

export default ButtonIconWithBadge;
