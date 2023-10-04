import { ReactNode } from 'react';
import { colors, sizes } from '../../themes/appTheme';

export type TextSizeType = keyof typeof sizes;
export type TextColorType = keyof typeof colors;

export interface TextProps {
  $size?: TextSizeType;
  $color?: TextColorType;
  weight?: string;
  children?: ReactNode;
}
