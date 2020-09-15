import { actions, ActionTypes } from "./../../../src/store/actions";
import { Todo } from "@/shared/models/todo";
import { AppState } from "@/store/state";
import { Action, ActionHandler } from "vuex";

describe("store: actions", () => {
  it("adds todo", () => {
    const state: AppState = {
      todos: [],
    };
    const commit = (_: string, todo: Todo) => (state.todos = [todo]);
    const content: string = "Test content";
    const addTodo = actions[ActionTypes.addTodo];
    //@ts-ignore
    addTodo({ commit }, content);
    expect(typeof state.todos[0].id).toBe('string');
    expect(typeof state.todos[0].createdAt).toBe('number');
    expect(state.todos[0].active).toBeTruthy();
    expect(state.todos[0].content).toBe(content);
  });
});
