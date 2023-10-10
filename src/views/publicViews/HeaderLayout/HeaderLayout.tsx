import { ReactNode } from 'react';
import { Aca } from '../../../components/Icons/Aca';
import * as S from './HeaderLayout.styles';

export const HeaderLayout = ({ children }: { children: ReactNode }) => (
  <S.Wrapper>
    <S.Header>
      <Aca />
    </S.Header>
    {children}
  </S.Wrapper>
);
