<template>
  首頁-
  {{ localStore.counter }}
</template>

<script setup>
// 导入Store
import { useStore } from "../pinia/store.js";

const localStore = useStore();
</script>