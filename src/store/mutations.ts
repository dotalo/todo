import { Todo } from "@/shared/models/todo";
import { Mutation, MutationTree } from "vuex";
import { AppState } from "./state";

const addTodo: Mutation<AppState> = (state, todo: Todo) =>
  (state.todos = [todo, ...state.todos]);

const removeTodo: Mutation<AppState> = (state, id: string) => {
  const indexInTodos: number = state.todos.findIndex((todo) => todo.id === id);
  const todos: Todo[] = state.todos;
  todos.splice(indexInTodos, 1);
  state.todos = todos;
};

const toggleTodo: Mutation<AppState> = (state, id: string) => {
  const indexInTodos: number = state.todos.findIndex((todo) => todo.id === id);
  const todos: Todo[] = state.todos;
  const todo: Todo = state.todos[indexInTodos];
  todos.splice(indexInTodos, 1, { ...todo, active: !todo.active });
  state.todos = todos;
};

export enum MutationTypes {
  addTodo = "ADD_TODO_MUTATION",
  removeTodo = "REMOVE_TODO_MUTATION",
  toggleTodo = "TOGGLE_TODO_MUTATION",
}

export const mutations: MutationTree<AppState> = {
  [MutationTypes.addTodo]: addTodo,
  [MutationTypes.removeTodo]: removeTodo,
  [MutationTypes.toggleTodo]: toggleTodo,
};
