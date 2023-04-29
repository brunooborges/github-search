import React from 'react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/styles/Themes/default';
import GlobalStyles from '../../assets/styles/global';

import Home from '../../pages/Home';
import Header from '../Header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
