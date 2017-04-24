import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import {HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './Components/View/App/App';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </HashRouter>

  </Provider>,
  document.getElementById('root')
);