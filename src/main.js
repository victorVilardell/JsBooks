import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { state, getters, mutations, actions } from "./storeFactory";
Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({ state, getters, mutations, actions });

new Vue({
  render: (h) => h(App),
  store: store
}).$mount("#app");
