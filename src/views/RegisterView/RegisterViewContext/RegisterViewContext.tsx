import { createContext, useCallback, useMemo, useState } from 'react';
import {
  RegisterFormData,
  RegisterViewContextData,
  RegisterViewContextProps,
  ValidationErrorList
} from './RegisterContext.types';
import { signUpAPI } from '../services/signUp.api';
import { AxiosError } from 'axios';
import { registerFormSchema } from '../helpers/registerFormSchema';
import { transformHyphenToCapital } from '../helpers/transformHyphenToCapital';

const registerViewInitialState: RegisterViewContextData = {
  async submitRegisterForm() {},
  formSchema: registerFormSchema,
  isRegisterFormValid: false
};

export const RegisterViewContext = createContext(registerViewInitialState);

export const RegisterViewContextProvider = ({ children }: RegisterViewContextProps) => {
  const [formSchema, setFormSchema] = useState(registerFormSchema);

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
        const axiosError = error as AxiosError<ValidationErrorList>;
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

  const registerViewContextValue: RegisterViewContextData = useMemo(
    () => ({
      submitRegisterForm,
      formSchema,
      isRegisterFormValid
    }),
    [submitRegisterForm, formSchema, isRegisterFormValid]
  );

  return (
    <RegisterViewContext.Provider value={registerViewContextValue}>
      {children}
    </RegisterViewContext.Provider>
  );
};
