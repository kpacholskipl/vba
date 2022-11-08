<template>
  <Alert />
  <router-view />
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
store.dispatch("getUser");
</script>
