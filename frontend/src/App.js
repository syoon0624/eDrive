import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

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
    </Switch>
  </BrowserRouter>
);

export default App;
