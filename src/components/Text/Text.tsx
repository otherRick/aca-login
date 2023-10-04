import { TextProps } from './Text.types';
import * as S from './Text.styles';
import { getElementBySize } from './helpers/getElementBySize';

export const Text = ({ $size = 'm', $color = 'navy900', children }: TextProps) => (
  <S.Text data-testid='text-component' as={getElementBySize($size)} {...{ $color, $size }}>
    {children}
  </S.Text>
);
