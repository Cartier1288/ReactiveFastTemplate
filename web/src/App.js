import './styles/views/App.scss';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme'

import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from './redux/reducers/app';

import ToggleMode from './components/ToggleMode'

/*
 * "start" point for components
 */
function App() {

  let userTheme = useSelector(state => state.app.theme);
  let dispatch = useDispatch();

  return (
      <ThemeProvider theme={(userTheme.mode === 'light') ? theme.light : theme.dark}>
        <CssBaseline injectFirst />
        <Box>
          <Box className={`app theme-${userTheme.mode}`}>
            <Box>
              <Button color="primary">Hello, React!</Button>
              <Button color="secondary">Hello, React!</Button>
            </Box>
            <Box>
              <ToggleMode checked />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
  );
}

export default App;
