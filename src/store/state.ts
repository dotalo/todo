import { Todo } from "@/shared/models/todo";

export interface AppState {
  todos: Todo[];
}

export const initialState: AppState = {
  todos: [
    {
      content: "Buy new pc :)",
      createdAt: 1600181097044,
      id: "5fc4d5b2-8cb1-4ad2-831c-fe836fe00eee",
      active: true,
    },
    {
      content: "Exercise 💪",
      createdAt: 1600181344007,
      id: "95814f0b-9659-427e-a06b-579d6eeb1018",
      active: true,
    },
    {
      content: "Learn Vue.js!",
      createdAt: 1600181419516,
      id: "f7df2581-2529-49e2-ba3a-5c1e95e5f381",
      active: false,
    },
  ],
};
