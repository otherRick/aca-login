import { Button } from '../../components/Button/Button';
import { Header } from './Header/Header';
import { RegisterForm } from './RegisterForm/RegisterForm';
import * as S from './RegisterView.styles';
import { RegisterViewContextProvider } from './RegisterViewContext/RegisterViewContext';

export const RegisterView = () => {
  return (
    <S.Container>
      <Header />

      <RegisterViewContextProvider>
        <RegisterForm />
      </RegisterViewContextProvider>

      <S.ButtonWrapper>
        <Button>Voltar ao login</Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
