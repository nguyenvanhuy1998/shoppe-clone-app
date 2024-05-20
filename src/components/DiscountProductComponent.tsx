import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';
import {globalStyles} from '../styles';
import MaterialIcons from './MaterialIcons';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
  text: string | number;
  icon?: string;
  backgroundColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
}
const DiscountProductComponent = ({
  text,
  icon,
  backgroundColor = COLORS.primaryYellowHex,
  style,
}: Props) => {
  return (
    <RowComponent
      style={[
        globalStyles.center,
        {
          backgroundColor,
        },
        style,
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
