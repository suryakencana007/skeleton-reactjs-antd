import {
  compose,
  composeReducers as _composeReducers,
  // mapReducers,
  // applyMiddleware,
} from 'kao-redux/yax';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import { reducer as form } from 'redux-form';


export default initialState => createStore => (reducer, preloadedState, enhancer) => {
  /* eslint-disable no-underscore-dangle */
  const enhancers = compose(
    // applyMiddleware(thunk.withExtraArgument({ axios })),
    process.env.NODE_ENV === 'development'
      && typeof window !== 'undefined'
      && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f);
  /* eslint-enable */
  const composeReducers = _composeReducers(reducer);
  // mapReducers({ form })
  const store = createStore(
    composeReducers,
    Object.assign({}, preloadedState, initialState),
    enhancer ? compose(enhancer, enhancers) : enhancers,
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(composeReducers, () => {
      store.replaceReducer(composeReducers);
    });
  }

  return store;
};
