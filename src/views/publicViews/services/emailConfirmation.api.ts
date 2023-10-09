import { AxiosError, AxiosResponse } from 'axios';
import { instance } from '../../../services';
import { APIResponseError } from '../../../services/services.types';

export interface EmailConfirmationAPIData {
  confirmationCode: string;
  email: string;
}

export const emailConfirmationAPI = ({
  confirmationCode,
  email
}: EmailConfirmationAPIData): Promise<AxiosResponse<boolean> | AxiosError<APIResponseError>> =>
  instance({
    method: 'POST',
    url: '/auth/confirm-sign-up',
    data: {
      confirmation_code: confirmationCode,
      email
    }
  });
