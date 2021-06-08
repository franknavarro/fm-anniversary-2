import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const PRIMARY_COLOR = '#272727';
const ICON_COLOR = '#7D7D7D';

let errorTheme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: ICON_COLOR,
    },
    background: {
      paper: PRIMARY_COLOR,
      default: PRIMARY_COLOR,
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
  },
});

export default responsiveFontSizes(errorTheme, {
  factor: 3,
  breakpoints: ['md', 'lg'],
});
