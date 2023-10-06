import { ThemeProvider } from 'styled-components';
import { appTheme } from './themes/appTheme';
import { Input } from './components/Input/Input';

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Input />
    </ThemeProvider>
  );
};
