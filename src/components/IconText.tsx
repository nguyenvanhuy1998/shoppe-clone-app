import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import Row from './Row';
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
const IconText = ({icon, text, fontSize, fontFamily, color, style}: Props) => {
  return (
    <Row style={[gapNumber(4), style]}>
      {icon && icon}
      <TextComponent
        text={text}
        fontSize={fontSize}
        fontFamily={fontFamily}
        color={color}
      />
    </Row>
  );
};

export default IconText;
