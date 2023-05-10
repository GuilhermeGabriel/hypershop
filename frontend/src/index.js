import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { UserDataProvider } from './Providers/UserDataProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';
import ScrollToTop from "./services/ScrollToTop";
import './services/firebase';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://54.94.110.220:3001/graphql",
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <UserDataProvider>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </UserDataProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
