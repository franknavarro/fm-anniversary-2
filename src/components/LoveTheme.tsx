import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { FC } from 'react';

const BASE_RED = '#ff3232';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: BASE_RED,
    },
    background: {
      default: BASE_RED,
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
  },
});

theme = responsiveFontSizes(theme, {
  factor: 3,
  breakpoints: ['md', 'lg'],
});

export const LoveTheme: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
