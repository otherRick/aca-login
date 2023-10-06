import { TextProps } from './Text.types';
import * as S from './Text.styles';
import { getElementBySize } from './helpers/getElementBySize';

export const Text = ({
  $weight = 'regular',
  $size = 'm',
  $color = 'navy900',
  $letterSpacingEnabled = false,
  children
}: TextProps) => (
  <S.Text
    data-testid='text-component'
    as={getElementBySize($size)}
    {...{ $color, $size, $weight, $letterSpacingEnabled }}
  >
    {children}
  </S.Text>
);
