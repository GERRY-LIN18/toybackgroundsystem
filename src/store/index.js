import tab from "./tab";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    tab,
  },
});
