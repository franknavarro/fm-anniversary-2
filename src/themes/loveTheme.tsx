import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const BASE_RED = '#ff3232';

let loveTheme = createMuiTheme({
  palette: {
    primary: {
      main: BASE_RED,
    },
    background: {
      paper: BASE_RED,
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

export default responsiveFontSizes(loveTheme, {
  factor: 3,
  breakpoints: ['md', 'lg'],
});
