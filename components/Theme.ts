import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#d32f2f',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.76)',
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        color: 'rgba(0,0,0,0.54)',
        '&$selected': {
          color: '#607d8b',
        },
      },
    },
  },
});

export default Theme;
