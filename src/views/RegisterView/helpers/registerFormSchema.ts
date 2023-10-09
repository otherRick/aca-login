export interface RegisterFormSchemaType {
  name: string;
  placeholder: string;
  label: string;
  passwordMode?: boolean;
  errorMessage?: string;
  value: string;
}

export const registerFormSchema: RegisterFormSchemaType[] = [
  {
    name: 'firstName',
    placeholder: 'Primeiro nome',
    label: 'Primeiro nome',
    errorMessage: undefined,
    value: ''
  },
  {
    name: 'lastName',
    placeholder: 'Último nome',
    label: 'Último nome',
    errorMessage: undefined,
    value: ''
  },
  {
    name: 'email',
    placeholder: 'seu@email.com',
    label: 'E-mail*',
    errorMessage: undefined,
    value: ''
  },
  {
    name: 'password',
    placeholder: '******',
    label: 'Senha*',
    passwordMode: true,
    errorMessage: undefined,
    value: ''
  },
  {
    name: 'confirmPassword',
    placeholder: '******',
    label: 'Confirme a senha*',
    passwordMode: true,
    errorMessage: undefined,
    value: ''
  }
];
