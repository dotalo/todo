import { mutations } from "./mutations";
import { AppState, initialState } from "./state";
import Vue from "vue";
import Vuex from "vuex";
import { actions } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store<AppState>({
  state: initialState,
  mutations,
  actions,
});
