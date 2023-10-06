import { Button } from '../../components/Button/Button';
import { Header } from './Header/Header';
import { RegisterForm } from './RegisterForm/RegisterForm';
import * as S from './RegisterView.styles';

export const RegisterView = () => {
  return (
    <S.Container>
      <Header />
      <RegisterForm />
      <S.ButtonWrapper>
        <Button>Voltar ao login</Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
