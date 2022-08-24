<template>
  關於
  <button @click="handler">修改 state </button>
</template>
<script setup>
// 导入Store
import { useStore } from "../pinia/store.js";
const localStore = useStore();
function handler() {
  localStore.increament();
}
</script>