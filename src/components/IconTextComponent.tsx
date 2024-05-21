import React, {ReactNode} from 'react';
import {ColorValue} from 'react-native';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {gapNumber} from '../utils/spacing';

interface Props {
  icon?: ReactNode;
  text: string;
  fontSize?: number;
  fontFamily?: string;
  color?: ColorValue;
}
const IconTextComponent = ({
  icon,
  text,
  fontSize,
  fontFamily,
  color,
}: Props) => {
  return (
    <RowComponent style={gapNumber(4)}>
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
