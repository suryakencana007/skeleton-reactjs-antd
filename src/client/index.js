import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'kao-store';
import { request as api } from 'kao-util';
import App from './App';

// Server side rendering would have mounted our state on this global.
const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line no-underscore-dangle
const store = configureStore(preloadedState, { api: api() });

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
