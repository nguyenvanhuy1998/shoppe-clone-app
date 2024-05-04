import {BORDER_RADIUS, SPACING} from '../constants';
import {FlexAlignType} from 'react-native';

export const createSpacing = (multiplier: number) => ({
  marginTop: SPACING.space_10 * multiplier,
});
export function createButtonStyle(
  minHeight: number,
  alignItems: FlexAlignType,
  justifyContent: FlexAlignType,
  borderRadius?: number,
): any {
  return {
    minHeight,
    alignItems,
    justifyContent,
    borderRadius: borderRadius || BORDER_RADIUS.radius_14,
  };
}
