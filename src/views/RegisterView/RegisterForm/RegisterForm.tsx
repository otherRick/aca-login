import { FormEvent } from 'react';
import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { useRegisterFormContext } from '../RegisterViewContext/useRegisterFormContext';
import * as S from './RegisterForm.styles';
import { Input } from '../../../components/Input/Input';

import { useNavigate } from 'react-router-dom';
import { serializeFormInputElements } from '../helpers/serializeFormInputElements';
import { useIsWeb } from '../../../hooks/useIsWeb';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const isWeb = useIsWeb();

  const { submitRegisterForm, formSchema, isRegisterFormValid } = useRegisterFormContext();
  const formSchemaNameFields = formSchema.slice(0, 2);
  const formSchemaRemainingFields = formSchema.slice(2);

  const onRegisterFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submitRegisterForm(serializeFormInputElements(event.currentTarget.elements));

    if (isRegisterFormValid) navigate('/confirm-email');
  };

  return (
    <S.FormSection>
      <S.Form data-testid='register-form-component' onSubmit={onRegisterFormSubmit}>
        <Text
          $letterSpacingEnabled={isWeb}
          $weight={isWeb ? 'semiBold' : 'bold'}
          $size={isWeb ? 'xl' : 'l'}
          $capitalized={isWeb}
        >
          Cadastro
        </Text>
        <S.InputsContainer>
          {isWeb ? (
            <S.WebNameFieldsContainer>
              {formSchemaNameFields.map((props) => (
                <Input $fullWidth={false} key={props.name} {...props} value={undefined} />
              ))}
            </S.WebNameFieldsContainer>
          ) : null}

          {(isWeb ? formSchemaRemainingFields : formSchema).map((props) => (
            <Input {...props} key={props.name} value={undefined} />
          ))}
        </S.InputsContainer>
        {isWeb ? <Text>Não possui uma conta?</Text> : null}
        <Button type='submit'>Criar minha conta aca.so</Button>
      </S.Form>
    </S.FormSection>
  );
};
