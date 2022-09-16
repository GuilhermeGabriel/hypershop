import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#3a3a3a',
    },
    terciary: {
      main: '#7a7a7a'
    },
    blue: {
      main: '#0000ff'
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={innerTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
