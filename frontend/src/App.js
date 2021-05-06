import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  html {
    box-sizing: border-box;

    * {
      box-sizing: inherit;
    }
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/search" exact component={SearchPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
