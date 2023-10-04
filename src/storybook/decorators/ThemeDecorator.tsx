import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../themes/appTheme';

export const ThemeDecorator = (Story: StoryFn) => (
  <ThemeProvider theme={appTheme}>
    <Story />
  </ThemeProvider>
);
