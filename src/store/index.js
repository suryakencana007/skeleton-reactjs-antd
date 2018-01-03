import createStore from 'kao-redux';
import store from 'kao-redux/yax';
import * as models from 'kao-redux/modules';


export default function (preloadedState, extraArgs = {}) {
  return store(
    {
      state: {
        loading: false,
      },
      reducers: {
        show(state) {
          return { ...state, loading: true };
        },
        hide(state) {
          return { ...state, loading: false };
        },
      },
      modules: models,
    }, createStore(preloadedState),
    extraArgs,
  );
}
