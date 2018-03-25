const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  state: 0,
  actions: {
    async add({ dispatch, commit }, payload, { api }) {
      // const response = await api({
      //   url: 'marketprice/category/10',
      //   method: 'get',
      // }, dispatch);
      await delay(1);
      commit('addDone', payload);
    },
    async minus({ commit }, payload) {
      await delay(1);
      commit('minusDone', payload);
    },
  },
  reducers: {
    addDone(state, payload) {
      return state + payload;
    },
    minusDone(state, payload) {
      return state - payload;
    },
  },
};
