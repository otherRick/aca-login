import { TextSizeType } from '../Text.types';

const sizesMap = {
  s: 'p',
  m: 'p',
  l: 'h3',
  xl: 'h1'
};

export const getElementBySize = (size: TextSizeType) => sizesMap[size];
