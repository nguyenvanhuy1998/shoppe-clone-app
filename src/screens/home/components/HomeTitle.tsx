import React from 'react';
import {
  ButtonSecondaryComponent,
  RowComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONT_FAMILY, FONTSIZE} from '../../../constants';
import {globalStyles} from '../../../styles';

interface Props {
  title: string;
  textButton: string;
}
const HomeTitle = ({title, textButton}: Props) => {
  return (
    <RowComponent
      style={[globalStyles.jusBetween, globalStyles.sectionSecondary]}>
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
