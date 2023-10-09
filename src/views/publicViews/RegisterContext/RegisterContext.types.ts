import { ReactNode } from 'react';
import { RegisterFormSchemaType } from '../RegisterView/helpers/registerFormSchema';

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface RegisterContextProps {
  children: ReactNode;
}

export interface RegisterContextData {
  submitRegisterForm(formData: RegisterFormData): Promise<void>;
  formSchema: RegisterFormSchemaType[];
  isRegisterFormValid: boolean;
  sendConfirmationCode(confirmationCode: string): Promise<void>;
  confirmationResponseError?: string;
  isEmailConfirmationValid?: boolean;
}
