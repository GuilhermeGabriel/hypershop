import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./services/ScrollToTop";
import { UserDataProvider } from './Providers/UserDataProvider';
import './services/firebase';

const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#3a3a3a',
    },
    secondary: {
      main: '#ffffff',
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
      <UserDataProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </UserDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);
