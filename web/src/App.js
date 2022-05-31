import './styles/views/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme'

import { useSelector } from 'react-redux';

import Home from './views/Home.js';
import NOTFOUND from './views/NOTFOUND.js';
import Navbar from './components/Navbar.js';

/*
 * "start" point for components
 */
function App() {
  
  let userTheme = useSelector(state => state.app.theme);
  
  return (
      <ThemeProvider theme={(userTheme.mode === 'light') ? theme.light : theme.dark}>
        <CssBaseline injectFirst />
        <Grid container spacing={0}>
          <Grid itemxs={0} md={2}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NOTFOUND />} /> {/* Default route if no matching route */}
            </Routes>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
