import { useContext } from 'react';
import { RegisterContext } from './RegisterContext';

export const useRegisterContext = () => useContext(RegisterContext);
