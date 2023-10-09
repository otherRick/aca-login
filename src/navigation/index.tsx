import { BrowserRouter } from 'react-router-dom';
import { PublicRouter } from '../views/publicViews/navigation/PublicRouter';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <PublicRouter />
    </BrowserRouter>
  );
};
