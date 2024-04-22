import {Platform} from 'react-native';
import {
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Spacing,
} from '../interface/theme';

export const COLORS: Color = {
  primaryWhiteHex: '#ffffff',
  secondaryWhiteHex: '#F7F8F9',
  primaryOrangeHex: '#FF5B2C',
  secondaryOrangeHex: '#ED4D2D',
  primaryBlackHex: '#3E4958',
  primaryGreyHex: '#D5DDE0',
  primaryDangerousHex: '#ff0505',
};
export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};
export const BORDER_RADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_14: 14,
  radius_20: 20,
  radius_25: 25,
};
export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_26: 26,
  size_28: 28,
  size_30: 30,
};
export const OS = {
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
};
export const FONT_FAMILY: FontFamily = {
  montserrat_black: 'Montserrat-Black',
  montserrat_bold: 'Montserrat-Bold',
  montserrat_extrabold: 'Montserrat-ExtraBold',
  montserrat_extralight: 'Montserrat-ExtraLight',
  montserrat_light: 'Montserrat-Light',
  montserrat_medium: 'Montserrat-Medium',
  montserrat_regular: 'Montserrat-Regular',
  montserrat_semibold: 'Montserrat-SemiBold',
  montserrat_thin: 'Montserrat-Thin',
};
const theme = {
  COLORS,
  OS,
  SPACING,
  FONT_FAMILY,
};
export default theme;
