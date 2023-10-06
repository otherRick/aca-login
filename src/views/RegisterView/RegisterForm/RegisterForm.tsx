import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Text } from '../../../components/Text/Text';
import * as S from './RegisterForm.styles';

export const RegisterForm = () => {
  return (
    <S.FormSection>
      <S.Form>
        <Text $weight='bold' $size='l'>
          Cadastro
        </Text>
        <Input placeholder='Primeiro nome' label='Primeiro nome' />
        <Input placeholder='Último nome' label='Último nome' />
        <Input placeholder='seu@email.com' label='E-mail*' />
        <Input placeholder='******' label='Senha*' passwordMode />
        <Input placeholder='******' label='Confirme a senha*' passwordMode />
        <Text>Não possui uma conta?</Text>
        <Button type='submit'>Criar minha conta aca.so</Button>
      </S.Form>
    </S.FormSection>
  );
};
