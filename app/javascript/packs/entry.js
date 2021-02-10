import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import store from './src/store';
import App from './src/App';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;

  ReactDOM.render(
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
});
