import { FormEvent } from 'react';
import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { useRegisterFormContext } from '../RegisterViewContext/useRegisterFormContext';
import * as S from './RegisterForm.styles';
import { Input } from '../../../components/Input/Input';

import { useNavigate } from 'react-router-dom';
import { serializeFormInputElements } from '../helpers/serializeFormInputElements';

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { submitRegisterForm, formSchema, isRegisterFormValid } = useRegisterFormContext();

  const onRegisterFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submitRegisterForm(serializeFormInputElements(event.currentTarget.elements));

    if (isRegisterFormValid) navigate('/confirm-email');
  };

  return (
    <S.FormSection>
      <S.Form data-testid='register-form-component' onSubmit={onRegisterFormSubmit}>
        <Text $weight='bold' $size='l'>
          Cadastro
        </Text>
        {formSchema.map((props) => (
          <Input key={props.name} {...props} value={undefined} />
        ))}
        <Text>Não possui uma conta?</Text>
        <Button type='submit'>Criar minha conta aca.so</Button>
      </S.Form>
    </S.FormSection>
  );
};
