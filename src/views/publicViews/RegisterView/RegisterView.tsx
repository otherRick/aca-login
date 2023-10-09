import { Button } from '../../../components/Button/Button';
import { useIsWeb } from '../../../hooks/useIsWeb';
import { RegisterForm } from './RegisterForm/RegisterForm';
import * as S from './RegisterView.styles';

export const RegisterView = () => {
  const isWeb = useIsWeb();

  return (
    <S.Container>
      <RegisterForm />

      {!isWeb ? (
        <S.ButtonWrapper>
          <Button>Voltar ao login</Button>
        </S.ButtonWrapper>
      ) : null}
    </S.Container>
  );
};
