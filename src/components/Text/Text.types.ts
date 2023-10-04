import { ReactNode } from 'react';
import { colors, sizes, weights } from '../../themes/appTheme';

export type TextSizeType = keyof typeof sizes;
export type TextColorType = keyof typeof colors;
export type TextWeightType = keyof typeof weights;

export interface TextProps {
  $size?: TextSizeType;
  $color?: TextColorType;
  $weight?: TextWeightType;
  children?: ReactNode;
}
