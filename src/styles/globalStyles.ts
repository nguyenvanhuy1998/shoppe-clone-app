import {StyleSheet} from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SPACING,
  WIDTH,
} from '../constants';
import {createButtonStyle} from '../utils';
import {gapNumber} from '../utils/spacing';

export const globalStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  jusCenter: {
    justifyContent: 'center',
  },
  jusBetween: {
    justifyContent: 'space-between',
  },
  flexOne: {
    flex: 1,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
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
    alignItems: 'center',
  },
  button: createButtonStyle(SPACING.space_10 * 6, 'center', 'center'),
  buttonText: createButtonStyle(SPACING.space_20, 'center', 'center'),
  text: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONT_FAMILY.montserrat_regular,
    color: COLORS.primaryBlackHex,
  },
  section: {
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_20,
  },
  sectionSecondary: {
    padding: SPACING.space_8,
  },

  inputContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.primaryGreyHex,
    borderRadius: BORDER_RADIUS.radius_14,
    backgroundColor: COLORS.secondaryWhiteHex,
    minHeight: 60,
    paddingHorizontal: SPACING.space_16,
  },
  inputSecondContainer: {
    borderRadius: BORDER_RADIUS.radius_4,
    minHeight: SPACING.space_36,
    backgroundColor: COLORS.secondaryWhiteHex,
    paddingHorizontal: SPACING.space_8,
  },
  buttonIcon: {
    width: SPACING.space_24,
    height: SPACING.space_24,
  },
  buttonIconSecondary: {
    minWidth: SPACING.space_24,
    minHeight: SPACING.space_24,
  },
  dotText: {
    position: 'absolute',
    right: -SPACING.space_2,
    top: -SPACING.space_2,
    borderWidth: 1,
    borderColor: COLORS.primaryWhiteHex,
    width: SPACING.space_16,
    height: SPACING.space_16,
    borderRadius: 99,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  dot: {
    width: SPACING.space_8,
    height: SPACING.space_8,
    borderRadius: 99,
    backgroundColor: COLORS.secondaryGreyHex,
  },
  buttonBoth: {
    borderRadius: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_4,
    minHeight: SPACING.space_24,
  },
  liveCard: {
    minHeight: 232,
    width: WIDTH / 3 + SPACING.space_32,
    padding: SPACING.space_8,
    borderRadius: BORDER_RADIUS.radius_4,
    overflow: 'hidden',
  },
  digitContainer: {
    backgroundColor: COLORS.secondaryBlackHex,
  },
  digitText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONT_FAMILY.montserrat_medium,
  },
  contentListContainer: {
    paddingHorizontal: SPACING.space_8,
    ...gapNumber(8),
  },
});
