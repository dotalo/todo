<template>
  <div id="app">
    <app-header />
    <main class="sm:w-screen h-screen pt-4 md:max-w-screen-md md:mx-auto">
      <new-todo />
      <separator />

      <div class="flex flex-col w-full">
        <div v-for="todo in todos" :key="todo.id">
          <todo-item :todo="todo"></todo-item>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Separator from './components/Separator.vue';
import { Todo } from './shared/models/todo';
import store from './store';
import TodoItem from './components/TodoItem.vue';
import AppHeader from './components/AppHeader.vue';
import NewTodo from './components/NewTodo.vue';

@Component({ store, components: { Separator, TodoItem, AppHeader, NewTodo } })
export default class App extends Vue {
  private get todos(): Todo[] {
    return this.$store.getters.orderedTodos;
  }
}
</script>
