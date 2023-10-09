import { createContext, useCallback, useMemo, useState } from 'react';
import {
  RegisterFormData,
  RegisterContextData,
  RegisterContextProps
} from './RegisterContext.types';
import { signUpAPI } from '../services/signUp.api';
import { AxiosError } from 'axios';
import {
  REGISTER_FORM_SCHEMA_ENUM,
  registerFormSchema
} from '../RegisterView/helpers/registerFormSchema';
import { transformHyphenToCapital } from '../RegisterView/helpers/transformHyphenToCapital';
import { emailConfirmationAPI } from '../services/emailConfirmation.api';
import { APIResponseError } from '../../../services/services.types';

const registerContextInitialState: RegisterContextData = {
  async submitRegisterForm() {},
  async sendConfirmationCode() {},
  formSchema: registerFormSchema,
  isRegisterFormValid: false,
  confirmationResponseError: undefined,
  isEmailConfirmationValid: false
};

export const RegisterContext = createContext(registerContextInitialState);

export const RegisterContextProvider = ({ children }: RegisterContextProps) => {
  const [formSchema, setFormSchema] = useState(registerFormSchema);
  const [confirmationResponseError, setconfirmationResponseError] = useState<string | undefined>(
    undefined
  );

  const sendConfirmationCode = useCallback(
    async (confirmationCode: string) => {
      try {
        const { value: email } = formSchema[REGISTER_FORM_SCHEMA_ENUM.EMAIL];

        await emailConfirmationAPI({ confirmationCode, email });
      } catch (error) {
        // const { response } = error as AxiosError<APIResponseError>;

        // !DEBT: threat errors with a error factory to show on the UI.
        setconfirmationResponseError('Algo deu errado. Tente novamente.');
      }
    },
    [formSchema]
  );

  const isEmailConfirmationValid = useMemo(
    () => confirmationResponseError === '',
    [confirmationResponseError]
  );

  /**
   * Submit a registration form asynchronously.
   * This function sends a POST request to a sign-up API with the provided form data.
   * @param {FormData} formData - The form data to be submitted, typically containing user registration details.
   * @throws {AxiosError<string>} - If an error occurs during the API request, it may throw an AxiosError with an error message string.
   * @returns {void}
   */
  const submitRegisterForm = useCallback(
    async (formData: RegisterFormData) => {
      delete formData.confirmPassword;

      // save the typed values.
      const formSchemaUpdate = formSchema.map((formEntity) => {
        return {
          ...formEntity,
          value: formData[formEntity.name as keyof typeof formData]!,
          errorMessage: ''
        };
      });

      setFormSchema(formSchemaUpdate);

      try {
        await signUpAPI({
          first_name: formData.firstName,
          last_name: formData.lastName,
          password: formData.password,
          email: formData.email
        });
      } catch (error) {
        const axiosError = error as AxiosError<APIResponseError>;
        const errorData = axiosError?.response?.data;
        const formSchemaUpdate = [...formSchema];

        if (Number(errorData?.detail?.length) > 0) {
          errorData?.detail?.forEach(({ loc, msg: message }) => {
            const errorInputLocation = loc[1];

            formSchema.forEach((formEntity, index) => {
              if (formEntity.name === transformHyphenToCapital(errorInputLocation)) {
                // !DEBT: this message should be wrapped in a lib that would translate to the user's languague.
                formSchemaUpdate[index].errorMessage = message;
              }
            });
          });

          setFormSchema(formSchemaUpdate);
        }

        // !DEBT: make a factory that takes in the error code and translate into a user friendly error display message.
      }
    },
    [formSchema]
  );

  const isRegisterFormValid = useMemo(
    () => formSchema.every(({ errorMessage }) => !errorMessage),
    [formSchema]
  );

  const RegisterContextValue: RegisterContextData = useMemo(
    () => ({
      submitRegisterForm,
      formSchema,
      isRegisterFormValid,
      sendConfirmationCode,
      confirmationResponseError,
      isEmailConfirmationValid
    }),
    [
      submitRegisterForm,
      formSchema,
      isRegisterFormValid,
      sendConfirmationCode,
      confirmationResponseError,
      isEmailConfirmationValid
    ]
  );

  return (
    <RegisterContext.Provider value={RegisterContextValue}>{children}</RegisterContext.Provider>
  );
};
