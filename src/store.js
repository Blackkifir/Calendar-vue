import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [],
      loading: true,
    };
  },
  mutations: {
    updateItems(state, newItems) {
      state.items = newItems;
    },
    updateLoading(state, newLoading) {
      state.loading = newLoading;
    }
  }
});

export default store;