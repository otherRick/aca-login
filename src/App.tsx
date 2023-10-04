import { ThemeProvider } from 'styled-components';
import { Text } from './components/Text/Text';
import { appTheme } from './themes/appTheme';

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Text>sad</Text>
    </ThemeProvider>
  );
};
