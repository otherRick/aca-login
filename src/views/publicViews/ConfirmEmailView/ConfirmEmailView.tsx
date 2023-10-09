import { FormEvent } from 'react';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Text } from '../../../components/Text/Text';
import { useIsWeb } from '../../../hooks/useIsWeb';
import { useRegisterContext } from '../RegisterContext/useRegisterContext';
import * as S from './ConfirmEmailView.styles';
import { useNavigate } from 'react-router-dom';

export const ConfirmEmailView = () => {
  const isWeb = useIsWeb();
  const navigate = useNavigate();

  const { sendConfirmationCode, confirmationResponseError, isEmailConfirmationValid } =
    useRegisterContext();

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const confirmationCodeInput = event.currentTarget.elements[0] as HTMLInputElement;
    await sendConfirmationCode(confirmationCodeInput.value);

    if (isEmailConfirmationValid) navigate('/login');
  };

  return (
    <S.ConfirmEmailSection>
      <S.ConfirmEmailForm onSubmit={submitForm}>
        <Text
          $letterSpacingEnabled={isWeb}
          $weight={isWeb ? 'semiBold' : 'bold'}
          $size={isWeb ? 'xl' : 'l'}
          $capitalized={isWeb}
          $centerText
        >
          Confirmar <br />
          e-mail
        </Text>

        <Input
          type='number'
          errorMessage={confirmationResponseError}
          label='Código'
          placeholder='Digite o código recebido...'
        />
        <Button $variant='secondary'>Confirmar e-mail</Button>
      </S.ConfirmEmailForm>

      <Text>Não recebeu o código?</Text>
      <Button $variant='secondary'>Aguarde 1:59 para reenviar...</Button>
    </S.ConfirmEmailSection>
  );
};
