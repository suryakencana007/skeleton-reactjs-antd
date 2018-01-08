import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'kao-store';
import { request as api } from 'kao-util';
import routers from './routes';

// Server side rendering would have mounted our state on this global.
const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line no-underscore-dangle
const store = configureStore(preloadedState, { api: api() });

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routers)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
