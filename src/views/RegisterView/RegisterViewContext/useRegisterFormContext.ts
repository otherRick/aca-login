import { useContext } from 'react';
import { RegisterViewContext } from './RegisterViewContext';

export const useRegisterFormContext = () => useContext(RegisterViewContext);
