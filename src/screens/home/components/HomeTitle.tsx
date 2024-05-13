import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ButtonSecondaryComponent,
  RowComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../../constants';
import {globalStyles} from '../../../styles';

interface Props {
  title: string;
  textButton: string;
}
const HomeTitle = ({title, textButton}: Props) => {
  return (
    <RowComponent style={[globalStyles.jusBetween, styles.container]}>
      <TextComponent
        text={title}
        color={COLORS.primaryOrangeHex}
        fontFamily={FONT_FAMILY.montserrat_bold}
        fontSize={FONTSIZE.size_18}
      />
      <ButtonSecondaryComponent
        type="both"
        text={textButton}
        color={COLORS.thirdGreyHex}
        nameIcon="arrow-forward"
        colorIcon={COLORS.thirdGreyHex}
        backgroundColor={'transparent'}
      />
    </RowComponent>
  );
};

export default HomeTitle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.space_8,
  },
});
