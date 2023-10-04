import { colors, sizes, weights } from './appTheme';

export type ColorType = typeof colors;
export type SizeType = typeof sizes;
export type WeightType = typeof weights;

export interface AppTheme {
  colors: ColorType;
  sizes: SizeType;
  weights: WeightType;
}
