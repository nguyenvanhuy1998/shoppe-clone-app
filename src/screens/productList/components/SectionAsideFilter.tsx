import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {Section, TextComponent} from '../../../components';
import {COLORS, FONT_FAMILY, SPACING} from '../../../constants';

interface Props {
  title: string;
  children?: ReactNode;
}
const SectionAsideFilter = ({title, children}: Props) => {
  return (
    <Section style={styles.container}>
      <TextComponent text={title} fontFamily={FONT_FAMILY.montserrat_medium} />
      {children}
    </Section>
  );
};

export default SectionAsideFilter;
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.primaryGreyHex,
    paddingBottom: SPACING.space_16,
  },
});
