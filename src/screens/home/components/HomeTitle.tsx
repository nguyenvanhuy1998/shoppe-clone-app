import React, {ReactNode} from 'react';
import {
  ButtonSecondaryComponent,
  MaterialIcons,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONT_FAMILY, FONTSIZE, SPACING} from '../../../constants';
import {globalStyles} from '../../../styles';

interface Props {
  title: string;
  textButton?: string;
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
      {textButton && (
        <ButtonSecondaryComponent
          styleContainer={globalStyles.resetPaddingHorizontal}
          text={textButton}
          color={COLORS.thirdGreyHex}
          iconRight={
            <MaterialIcons
              name="keyboard-arrow-right"
              color={COLORS.thirdGreyHex}
              size="large"
            />
          }
        />
      )}
    </RowComponent>
  );
};

export default HomeTitle;
