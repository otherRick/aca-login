import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { appTheme } from './themes/appTheme';
import { Navigation } from './navigation';

const GlobalStyle = createGlobalStyle`
  body {
    /* height: 100vh; */
    /* display: flex; */
    /* flex: 1; */
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <Navigation />
    </ThemeProvider>
  );
};
