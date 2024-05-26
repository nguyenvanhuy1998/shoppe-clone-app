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

export const WIDTH_PRODUCT = (WIDTH - SPACING.space_24) / 2;
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
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: createButtonStyle(SPACING.space_10 * 6, 'center', 'center'),
  buttonText: createButtonStyle(SPACING.space_20, 'center', 'center'),
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: COLORS.primaryWhiteHex,
    padding: SPACING.space_8,
  },

  inputOldContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.primaryGreyHex,
    borderRadius: BORDER_RADIUS.radius_14,
    backgroundColor: COLORS.secondaryWhiteHex,
    minHeight: 60,
    paddingHorizontal: SPACING.space_16,
  },
  inputContainer: {
    flex: 1,
    borderRadius: BORDER_RADIUS.radius_4,
    minHeight: SPACING.space_32,
    backgroundColor: COLORS.primaryWhiteHex,
    paddingHorizontal: SPACING.space_8,
    gap: SPACING.space_4,
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
  buttonBoth: {
    minHeight: SPACING.space_24,
    padding: SPACING.space_4,
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

  resetContainer: {
    padding: 0,
    margin: 0,
  },
  resetPadding: {
    padding: 0,
  },
  horizontalSpacing8: {
    paddingHorizontal: SPACING.space_8,
  },
  verticalSpacing8: {
    paddingVertical: SPACING.space_8,
  },
  product: {
    backgroundColor: COLORS.primaryWhiteHex,
    width: WIDTH_PRODUCT,
    marginBottom: SPACING.space_8,
    marginLeft: SPACING.space_8,
  },
  header: {
    position: 'absolute',
    left: SPACING.space_8,
    right: SPACING.space_8,
  },
  decorLine: {
    textDecorationLine: 'line-through',
  },
  discount: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  column: {
    flexDirection: 'column',
  },
  resetPaddingHorizontal: {
    paddingHorizontal: 0,
  },
  input: {
    flex: 1,
    minHeight: SPACING.space_32,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONT_FAMILY.montserrat_regular,
    color: COLORS.primaryBlackHex,
  },
  dot: {
    backgroundColor: COLORS.thirdGreyHex,
    width: SPACING.space_4 + SPACING.space_2,
    height: SPACING.space_4 + SPACING.space_2,
    borderRadius: 99,
  },
  activeDot: {
    backgroundColor: COLORS.primaryOrangeHex,
  },
});
