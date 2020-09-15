import { MutationTypes } from "./mutations";
import { Action, ActionTree } from "vuex";
import { v4 as uuid } from "uuid";
import { AppState } from "./state";
import { Todo } from "@/shared/models/todo";

const addTodo: Action<AppState, AppState> = ({ commit }, content: string) => {
  const createdAt = Date.now();
  const id = uuid();
  const active = true;
  const todo: Todo = { createdAt, id, active, content };

  commit(MutationTypes.addTodo, todo);
};

export enum ActionTypes {
  addTodo = "ADD_TODO_ACTION",
}

export const actions: ActionTree<AppState, AppState> = {
  [ActionTypes.addTodo]: addTodo,
};
