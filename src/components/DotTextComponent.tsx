import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../constants';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';
interface Props {
  text: string;
  stylesContainer?: StyleProp<ViewStyle>;
}
const DotTextComponent = ({text, stylesContainer}: Props) => {
  return (
    <View style={[globalStyles.dotText, globalStyles.center, stylesContainer]}>
      <TextComponent
        text={text}
        color={COLORS.primaryWhiteHex}
        fontSize={FONTSIZE.size_8}
        fontFamily={FONT_FAMILY.montserrat_medium}
      />
    </View>
  );
};

export default DotTextComponent;
const styles = StyleSheet.create({});
