import {FlexAlignType} from 'react-native';
import {BORDER_RADIUS} from '../constants';

const createSpacing =
  (direction: 'Top' | 'Right' | 'Bottom' | 'Left') => (multiplier: number) => ({
    [`margin${direction}`]: multiplier,
  });
export const spacingTop = createSpacing('Top');
export const spacingRight = createSpacing('Right');
export const spacingBottom = createSpacing('Bottom');
export const spacingLeft = createSpacing('Left');

export const gapNumber = (gap: number) => ({
  gap,
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
