import { colors, sizes } from '../themes/appTheme';

export type ColorType = typeof colors;
export type SizesType = typeof sizes;

export interface AppTheme {
  colors: ColorType;
  sizes: SizesType;
}
