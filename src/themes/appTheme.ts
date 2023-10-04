import { DefaultTheme } from 'styled-components';

export const colors = {
  navy000: '#000004',
  navy300: '#1E1F2F',
  navy400: '#030446',
  navy600: '#1C1D59',
  navy900: '#FFFFFF',
  red600: '#E93F78'
};

export const sizes = {
  s: '12',
  m: '16',
  l: '32',
  xl: '50'
};

export const weights = {
  bold: '700',
  semiBold: '600',
  medium: '500',
  regular: '400',
  light: '300'
};

export const appTheme: DefaultTheme = {
  colors,
  sizes,
  weights
};
