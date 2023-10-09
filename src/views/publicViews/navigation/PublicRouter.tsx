import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderLayout } from '../HeaderLayout/HeaderLayout';
import { publicRoutes } from './publicRoutes';
import { RegisterContextProvider } from '../RegisterContext/RegisterContext';

export const PublicRouter = () => {
  return (
    <RegisterContextProvider>
      <HeaderLayout>
        <Routes>
          <Route index element={<Navigate to='/register' replace />} />
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </HeaderLayout>
    </RegisterContextProvider>
  );
};
