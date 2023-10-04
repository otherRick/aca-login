import { TextProps } from './Text.types';
import * as S from './Text.styles';

export const Text = ({ $size = 'm', $color = 'navy000', children }: TextProps) => {
  return <S.Text {...{ $color, $size }}>{children}</S.Text>;
};
