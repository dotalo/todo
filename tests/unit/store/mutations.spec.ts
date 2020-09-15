import { AppState } from "./../../../src/store/state";
import { Todo } from "@/shared/models/todo";
import { MutationTypes, mutations } from "./../../../src/store/mutations";

describe("store: mutations", () => {
  it("adds todo", () => {
    const addTodo = mutations[MutationTypes.addTodo];
    const state: AppState = { todos: [] };
    const todo: Todo = {
      createdAt: 0,
      content: "",
      id: "test-todo",
      active: true,
    };
    addTodo(state, todo);
    expect(state.todos[0]).toBe(todo);
  });

  it("removes todo", () => {
    const removeTodo = mutations[MutationTypes.removeTodo];
    const state: AppState = {
      todos: [
        {
          createdAt: 0,
          content: "",
          id: "test-todo",
          active: true,
        },
      ],
    };
    removeTodo(state, "test-todo");
    expect(state.todos.length).toBe(0);
  });

  it("toggles todo", () => {
    const toggleTodo = mutations[MutationTypes.toggleTodo];
    const state: AppState = {
      todos: [
        {
          createdAt: 0,
          content: "",
          id: "test-todo",
          active: true,
        },
      ],
    };
    toggleTodo(state, "test-todo");
    expect(state.todos[0].active).toBeFalsy();
  });
});
