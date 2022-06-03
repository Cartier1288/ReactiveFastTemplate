import './styles/views/App.scss';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { IntlProvider } from 'react-intl';
import CssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme'

import { useSelector } from 'react-redux';

import Home from './views/Home.js';
import NOTFOUND from './views/NOTFOUND.js';
import Navbar from './components/Navbar.js';

import { connect } from 'react-redux';
import { setLocale } from './redux/reducers/app';


const mapStateToProps = (state) => ({
  theme: state.app.theme,
  intl: state.app.intl
})
const mapDispatchToProps = (dispatch) => ({
  setLocale: (locale) => { dispatch(setLocale(locale)) }
})

/*
 * "start" point for components
 */
class App extends Component {
  
  // used for app startup side-effects
  componentDidMount() {
    console.log("first mount of App");
    console.log("loading locale " + this.props.intl.locale);
    this.props.setLocale(this.props.intl.locale)
  }

  render() {
    const userTheme = this.props.theme;
    const { intl } = this.props;
  
    return (
      <ThemeProvider theme={(userTheme.mode === 'light') ? theme.light : theme.dark}>
        <CssBaseline injectFirst />
        <IntlProvider
          locale={intl.locale} 
          defaultLocale="en"
          messages={intl.messages}
        >
          <Grid container spacing={0}>
            <Grid item xs={0} md={2}>
              <Navbar />
            </Grid>
            <Grid item xs={12} md={10}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NOTFOUND />} /> {/* Default route if no matching route */}
              </Routes>
            </Grid>
          </Grid>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
