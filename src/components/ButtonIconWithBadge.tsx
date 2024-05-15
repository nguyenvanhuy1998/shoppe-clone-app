import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../constants';
import ButtonSecondaryComponent from './ButtonSecondaryComponent';
import DotTextComponent from './DotTextComponent';
import Ionicons from './Ionicons';

const ButtonIconWithBadge = ({
  iconName,
  badgeText,
  styleContainer,
  onPress,
}: {
  iconName: string;
  badgeText: string;
  styleContainer?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) => (
  <ButtonSecondaryComponent
    styleContainer={styleContainer}
    type="icon"
    onPress={onPress}
    childrenIcon={
      <>
        <Ionicons
          name={iconName}
          color={COLORS.primaryWhiteHex}
          size="extraLarge"
        />
        <DotTextComponent text={badgeText} />
      </>
    }
  />
);

export default ButtonIconWithBadge;
