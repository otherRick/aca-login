import { AxiosResponse } from 'axios';
import { instance } from '../../../services';

export interface signUpAPIType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export const signUpAPI = async (formData: signUpAPIType): Promise<AxiosResponse<string>> =>
  instance({
    method: 'POST',
    url: '/auth/sign-up',
    data: formData
  });
