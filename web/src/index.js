import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider'

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';


/* DEFAULTS */
axios.defaults.baseURL = process.env.REACT_APP_URL_HOME


/* INITIALIZE APP & RENDER IT */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>             {/* Redux Provider */}
      <StyledEngineProvider injectFirst> {/* this ensures our custom styling overrides Material's */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
