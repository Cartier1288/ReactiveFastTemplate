import { createTheme } from '@mui/material/styles';

/*
 * See: [Theming - Material UI](https://mui.com/material-ui/customization/theming/) for more
 * info on what defaults can be changed.
 */

const baseLightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1C4437'
        },
        secondary: {
            main: '#FFA500'
        }
    }
});

const baseDarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#FFA500'
        },
        background: {
            default: '#000000'
        }
    }
});

const theme = {
    light: baseLightTheme,
    dark: baseDarkTheme
};

export default theme;