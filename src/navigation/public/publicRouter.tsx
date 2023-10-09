import { RegisterView } from '../../views/RegisterView/RegisterView';

export const publicRouter = [
  {
    path: '/register',
    element: <RegisterView />
  },
  {
    path: '/confirm-email'
    // element: <ConfirmEmailView />
  }
];
