import { Commit, createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      theme: "dark",
    };
  },
  mutations: {
    changeTheme(state, payload) {
      state.theme = payload;
    },
  },
  getters: {
    theme: (state) => state.theme,
  },
  actions: {
    changeTheme({ commit }: { commit: Commit }, payload: string) {
      commit("changeTheme", payload);
    },
  },
});
