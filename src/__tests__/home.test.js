import React from 'react';
import renderer from 'react-test-renderer';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { Provider } from 'react-redux';
import configureStore from 'kao-store';

import Home from 'kao-containers/Home';

const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line no-underscore-dangle
const store = configureStore(preloadedState);

it('renders Home correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
