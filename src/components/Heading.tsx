import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../constants';
import Button from './Button';
import MaterialIcons from './MaterialIcons';
import Row from './Row';
import TextComponent from './TextComponent';

interface Props {
  styleContainer?: StyleProp<ViewStyle>;
  text: string;
  sizeTitle?: number;
  colorTitle?: string;
  fontFamilyTitle?: string;
  textButton?: string;
}
const Heading = ({
  text,
  textButton,
  sizeTitle = FONTSIZE.size_16,
  colorTitle = COLORS.primaryOrangeHex,
  fontFamilyTitle = FONT_FAMILY.montserrat_semibold,
  styleContainer,
}: Props) => {
  return (
    <Row style={[styles.container, styleContainer]}>
      <TextComponent
        text={text}
        fontSize={sizeTitle}
        fontFamily={fontFamilyTitle}
        color={colorTitle}
      />
      {textButton && (
        <Button
          text={textButton}
          endIcon={
            <MaterialIcons
              name="keyboard-arrow-right"
              color={COLORS.thirdGreyHex}
            />
          }
        />
      )}
    </Row>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.primaryWhiteHex,
    padding: SPACING.space_8,
  },
});
