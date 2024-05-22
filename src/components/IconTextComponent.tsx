import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {gapNumber} from '../utils/spacing';

interface Props {
  icon?: ReactNode;
  text: string | number;
  fontSize?: number;
  fontFamily?: string;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
}
const IconTextComponent = ({
  icon,
  text,
  fontSize,
  fontFamily,
  color,
  style,
}: Props) => {
  return (
    <RowComponent style={[gapNumber(4), style]}>
      {icon && icon}
      <TextComponent
        text={text}
        fontSize={fontSize}
        fontFamily={fontFamily}
        color={color}
      />
    </RowComponent>
  );
};

export default IconTextComponent;
