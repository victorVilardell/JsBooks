import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuex);

const state = {
  category: 0
};

const getters = {
  category: (state) => state.category
};

const mutations = {
  category(state, newState) {
    state.category = newState;
  }
};

const actions = {
  setCategory(context, newCategory) {
    context.commit("category", newCategory);
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

new Vue({
  render: (h) => h(App),
  store: store
}).$mount("#app");
