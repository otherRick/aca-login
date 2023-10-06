import { ButtonProps } from './Button.types';
import * as S from './Button.styles';
import { Text } from '../Text/Text';
import { getColorByVariant } from './helpers/getColorByVariant';

export const Button = ({ children, $variant = 'primary', ...rest }: ButtonProps) => (
  <S.Button data-testid='button-component' {...rest} {...{ $variant }}>
    <Text $size='s' $weight='bold' $color={getColorByVariant($variant).color}>
      {children}
    </Text>
  </S.Button>
);
