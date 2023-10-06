import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { publicRouter } from './public/publicRouter';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to='/register' replace />} />
        {publicRouter.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
