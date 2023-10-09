import { ReactNode } from 'react';
import { Aca } from '../../../components/Icons/Aca';
import * as S from './HeaderLayout.styles';

export const HeaderLayout = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
    <S.Container>
      <Aca />
    </S.Container>
    {children}
  </div>
);
