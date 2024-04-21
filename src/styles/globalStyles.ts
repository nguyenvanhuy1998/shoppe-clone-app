import {StyleSheet} from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SPACING,
} from '../constants';

export const globalStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  flexOne: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    minHeight: SPACING.space_10 * 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.radius_14,
  },
  buttonText: {
    minHeight: SPACING.space_20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONT_FAMILY.montserrat_bold,
    color: COLORS.primaryBlackHex,
  },
  section: {
    paddingHorizontal: SPACING.space_36,
  },
});
