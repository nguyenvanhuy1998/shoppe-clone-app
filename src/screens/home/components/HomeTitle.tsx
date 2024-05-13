import React, {ReactNode} from 'react';
import {
  ButtonSecondaryComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../../constants';
import {globalStyles} from '../../../styles';

interface Props {
  title: string;
  textButton: string;
  countdown?: ReactNode;
}
const HomeTitle = ({title, textButton, countdown}: Props) => {
  return (
    <RowComponent
      style={[globalStyles.jusBetween, globalStyles.sectionSecondary]}>
      <RowComponent>
        <TextComponent
          text={title}
          color={COLORS.primaryOrangeHex}
          fontFamily={FONT_FAMILY.montserrat_bold}
          fontSize={FONTSIZE.size_18}
        />
        {countdown && <SpaceComponent width={SPACING.space_4} />}
        {countdown && countdown}
      </RowComponent>
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
