import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const BASE_BLACK = '#272727';
const ICON_COLOR = '#7D7D7D';

let doggyTheme = createMuiTheme({
  palette: {
    primary: {
      main: BASE_BLACK,
    },
    secondary: {
      main: ICON_COLOR,
    },
    background: {
      paper: BASE_BLACK,
      default: BASE_BLACK,
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
  },
});

export default responsiveFontSizes(doggyTheme, {
  factor: 3,
  breakpoints: ['md', 'lg'],
});
