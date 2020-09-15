<template>
  <div
    class="my-2 mx-4 bg-darkLighter rounded p-2 flex justify-between"
    :class="{ 'bg-opacity-50': !todo.active }"
  >
    <h1
      class="text-xl"
      :class="!todo.active ? 'line-through' : 'font-semibold'"
    >
      {{ todo.content }}
    </h1>

    <div class="flex items-center">
      <button
        v-on:click="() => toggleTodo(todo.id)"
        class="text-green-500 mr-2 h-full rounded outline-none"
        v-if="todo.active"
      >
        Done
      </button>
      <button
        v-on:click="() => toggleTodo(todo.id)"
        class="text-light mr-2 h-full rounded outline-none"
        v-if="!todo.active"
      >
        Restore
      </button>
      <button
        v-on:click="() => removeTodo(todo.id)"
        class="text-red-500 h-full rounded outline-none"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/shared/models/todo';
import store from '@/store';
import { MutationTypes } from '@/store/mutations';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ store })
export default class TodoItem extends Vue {
  @Prop() readonly todo!: Todo;

  private removeTodo(id: string): void {
    this.$store.commit(MutationTypes.removeTodo, id);
  }

  private toggleTodo(id: string): void {
    this.$store.commit(MutationTypes.toggleTodo, id);
  }
}
</script>
