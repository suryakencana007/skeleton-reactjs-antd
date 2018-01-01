import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { Provider } from 'react-redux';
import configureStore from 'kao-store';
import App from 'kao-client/App';

const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line no-underscore-dangle
const store = configureStore(preloadedState);

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
      div,
    );
  });
});
