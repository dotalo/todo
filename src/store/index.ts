import { mutations } from './mutations';
import { AppState, initialState } from './state';
import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { Todo } from '@/shared/models/todo';

Vue.use(Vuex);

export default new Vuex.Store<AppState>({
  state: initialState,
  mutations,
  actions,
  getters: {
    orderedTodos: state => {
      return state.todos.sort((a: Todo, b: Todo) =>
        a.active === b.active ? 0 : a.active ? -1 : 1
      );
    },
  },
});
