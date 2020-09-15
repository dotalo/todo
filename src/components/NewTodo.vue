<template>
  <div class="flex justify-center align-center mx-4">
    <input
      placeholder="What's left?"
      v-model="contentInput"
      class="bg-darkLighter rounded mr-2 w-2/3 max-w-full outline-none"
      style="text-indent: 1rem;"
    />
    <button
      v-on:click="addTodo"
      :disabled="content === ''"
      class="bg-green-500 px-3 py-2 text-dark font-bold rounded disabled:opacity-75"
    >
      Add
    </button>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { ActionTypes } from '@/store/actions';
import { Component, Vue } from 'vue-property-decorator';

@Component({ store })
export default class NewTodo extends Vue {
  private content = '';

  private get contentInput(): string {
    return this.content;
  }

  private set contentInput(content) {
    this.content = content;
  }

  private addTodo(): void {
    this.$store.dispatch(ActionTypes.addTodo, this.content);
    this.content = '';
  }
}
</script>
