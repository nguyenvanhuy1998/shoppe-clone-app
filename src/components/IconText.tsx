import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Row from './Row';
import TextComponent from './TextComponent';
import {gapNumber} from '../utils/spacing';
import {globalStyles} from '../styles';

interface Props {
  icon?: ReactNode;
  text: string | number;
  fontSize?: number;
  fontFamily?: string;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const IconText = ({
  icon,
  text,
  fontSize,
  fontFamily,
  color,
  style,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[globalStyles.row, gapNumber(4), style]}>
      {icon && icon}
      <TextComponent
        text={text}
        fontSize={fontSize}
        fontFamily={fontFamily}
        color={color}
      />
    </TouchableOpacity>
  );
};

export default IconText;
