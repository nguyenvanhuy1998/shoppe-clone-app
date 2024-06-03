import React, {ReactNode} from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {IconText, Section} from '../../../components';
import {COLORS, FONT_FAMILY, SPACING} from '../../../constants';

interface Props {
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
  onPress?: () => void;
  color?: ColorValue;
}
const SectionAsideFilter = ({title, children, icon, onPress, color}: Props) => {
  return (
    <Section style={styles.container}>
      <IconText
        onPress={onPress}
        text={title}
        fontFamily={FONT_FAMILY.montserrat_medium}
        color={color}
        icon={icon}
      />
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
