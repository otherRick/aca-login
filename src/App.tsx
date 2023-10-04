import { ThemeProvider } from 'styled-components';
import { Text } from './components/Text/Text';
import { appTheme } from './themes/appTheme';

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <div style={{ height: '100vh', background: 'black' }}>
        <Text $size='xl'>Login</Text>
      </div>
    </ThemeProvider>
  );
};
