import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';

interface Props {
  styleContainer?: StyleProp<ViewStyle>;
  text?: string | number;
  fontSize?: number;
  textColor?: string;
  dimension?: number;
  borderColor?: string;
}
const Dot = ({
  styleContainer,
  text,
  dimension = SPACING.space_16,
  borderColor = COLORS.primaryWhiteHex,
  fontSize = FONTSIZE.size_8,
  textColor = COLORS.primaryWhiteHex,
}: Props) => {
  return (
    <View
      style={[
        globalStyles.dot,
        {
          width: dimension,
          height: dimension,
          borderColor,
        },
        styleContainer,
      ]}>
      {text && (
        <TextComponent
          text={text}
          fontSize={fontSize}
          color={textColor}
          fontFamily={FONT_FAMILY.montserrat_medium}
        />
      )}
    </View>
  );
};

export default Dot;
