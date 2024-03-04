import type { Decorator, Preview } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
// @ts-ignore:next-line
import { theme } from '@phila-front/utils';

const materialDecorator = withThemeFromJSXProvider({
  GlobalStyles: CssBaseline,
  Provider: ThemeProvider,
  themes: {
    light: theme,
    // dark: theme,
  },
  defaultTheme: 'light',
}) as Decorator;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [materialDecorator],
};

export default preview;
