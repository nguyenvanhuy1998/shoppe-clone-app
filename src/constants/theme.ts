import {Platform} from 'react-native';
import {BorderRadius, Color, FontSize, Spacing} from '../interface/theme';

export const COLORS: Color = {
  primaryWhiteHex: '#ffffff',
  primaryOrangeHex: '#FF5B2C',
  secondaryOrangeHex: '#ED4D2D',
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
  size_28: 28,
  size_30: 30,
};
export const OS = {
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
};
const theme = {
  COLORS,
  OS,
  SPACING,
};
export default theme;
