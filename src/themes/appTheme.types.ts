import { colors, sizes } from './appTheme';

export type ColorType = typeof colors;
export type SizesType = typeof sizes;

export interface AppTheme {
  colors: ColorType;
  sizes: SizesType;
}
