import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


let theme = createTheme({
  palette: {
    primary: {
      main: '#8c0b0b',
    },
    secondary: {
      main: '##1f1f1f',
    },
    background: {
      default: '#313131',
    },
  },
  typography: {
    h6: {
      color: '#fff',
    },
    h5: {
      color: '#fff',
    },
    h4: {
      color: '#fff',
    },
    body1: {
      color: '#fff',
    }
  },
  Paper: {
    backgrounColor: '#000',
  }
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
