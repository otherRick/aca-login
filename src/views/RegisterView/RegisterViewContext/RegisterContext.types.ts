import { ReactNode } from 'react';
import { RegisterFormSchemaType } from '../helpers/registerFormSchema';

type ValidationError = {
  loc: string[];
  msg: string;
};

export type ValidationErrorList = {
  detail: ValidationError[];
};

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface RegisterViewContextProps {
  children: ReactNode;
}

export interface RegisterViewContextData {
  submitRegisterForm(formData: RegisterFormData): Promise<void>;
  formSchema: RegisterFormSchemaType[];
  isRegisterFormValid: boolean;
}
