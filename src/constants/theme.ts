import {Dimensions, Platform} from 'react-native';

interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
  space_56: number;
}

interface Color {
  primaryWhiteHex: string;
  primaryOrangeHex: string;
  secondaryOrangeHex: string;
  primaryBlackHex: string;
  primaryYellowHex: string;
  primaryGreyHex: string;
  thirdGreyHex: string;
  secondaryGreyHex: string;
  secondaryWhiteHex: string;
  primaryDangerousHex: string;
}
interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_26: number;
  size_28: number;
  size_30: number;
}
interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_14: number;
  radius_20: number;
  radius_25: number;
}
interface FontFamily {
  montserrat_black: string;
  montserrat_bold: string;
  montserrat_extrabold: string;
  montserrat_extralight: string;
  montserrat_light: string;
  montserrat_medium: string;
  montserrat_regular: string;
  montserrat_semibold: string;
  montserrat_thin: string;
}
export const COLORS: Color = {
  primaryYellowHex: '#FFC300',
  primaryWhiteHex: '#ffffff',
  secondaryWhiteHex: '#F7F8F9',
  primaryOrangeHex: '#FF5B2C',
  secondaryOrangeHex: '#ED4D2D',
  primaryBlackHex: '#3E4958',
  primaryGreyHex: '#D5DDE0',
  thirdGreyHex: '#808080',
  secondaryGreyHex: '#A9A9A9',
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
  space_56: 56,
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
export const IconSizes = {
  small: 14,
  medium: 18,
  large: 24,
  extraLarge: 28,
};
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const SHADOW = {
  primary: {
    shadowColor: COLORS.primaryBlackHex,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};
const theme = {
  COLORS,
  OS,
  SPACING,
  FONT_FAMILY,
  IconSizes,
  WIDTH,
  HEIGHT,
  SHADOW,
};
export default theme;
