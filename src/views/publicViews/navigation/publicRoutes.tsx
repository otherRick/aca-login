import { ConfirmEmailView } from '../ConfirmEmailView/ConfirmEmailView';
import { RegisterView } from '../RegisterView/RegisterView';

export const publicRoutes = [
  {
    path: '/register',
    element: <RegisterView />
  },
  {
    path: '/confirm-email',
    element: <ConfirmEmailView />
  }
];
