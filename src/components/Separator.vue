<template>
  <div class="flex w-full justify-center py-4">
    <div class="w-16 h-1 bg-darkLighter flex rounded-full"></div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Component, Vue } from "vue-property-decorator";

@Component({ store })
export default class Separator extends Vue {}
</script>
