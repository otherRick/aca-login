import { Button } from '../../components/Button/Button';
import { useIsWeb } from '../../hooks/useIsWeb';
import { Header } from './Header/Header';
import { RegisterForm } from './RegisterForm/RegisterForm';
import * as S from './RegisterView.styles';
import { RegisterViewContextProvider } from './RegisterViewContext/RegisterViewContext';

export const RegisterView = () => {
  const isWeb = useIsWeb();

  return (
    <S.Container>
      <Header />

      <RegisterViewContextProvider>
        <RegisterForm />
      </RegisterViewContextProvider>

      {!isWeb ? (
        <S.ButtonWrapper>
          <Button>Voltar ao login</Button>
        </S.ButtonWrapper>
      ) : null}
    </S.Container>
  );
};
