import { ReactNode } from 'react';
import { TextColorType } from '../Text/Text.types';

export type ButtonVariantType = 'primary' | 'secondary';

export interface VariantMapType {
  backgroundColor: string;
  color: TextColorType;
}

export interface VariantToColorMapType {
  primary: VariantMapType;
  secondary: VariantMapType;
}

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'style' | 'className'
  > {
  children?: ReactNode;
  $variant?: ButtonVariantType;
}
