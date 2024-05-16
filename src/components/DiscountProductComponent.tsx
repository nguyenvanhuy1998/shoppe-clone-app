import {ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import MaterialIcons from './MaterialIcons';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles';

interface Props {
  text: string;
  icon?: string;
  backgroundColor?: ColorValue;
}
const DiscountProductComponent = ({
  text,
  icon,
  backgroundColor = COLORS.primaryYellowHex,
}: Props) => {
  return (
    <RowComponent
      style={[
        styles.container,
        globalStyles.horizontalSpacing8,
        globalStyles.center,
        {
          backgroundColor,
        },
      ]}>
      {icon && <MaterialIcons name={icon} color={COLORS.primaryRedHex} />}
      <TextComponent
        text={`-${text}%`}
        color={COLORS.primaryOrangeHex}
        fontFamily={FONT_FAMILY.montserrat_medium}
        fontSize={FONTSIZE.size_12}
      />
    </RowComponent>
  );
};

export default DiscountProductComponent;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
    minWidth: SPACING.space_32,
  },
});
