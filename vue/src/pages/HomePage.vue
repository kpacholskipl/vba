<template>
  <Toolbar :show="true"></Toolbar>
  <Alert></Alert>
  <main class="bg-gray-100 mx-auto rounded-lg p-2 h-full max-w-7xl">
    <div class="flex flex-wrap mb-4" v-if="posts.length">
      <div
        class="p-8 w-auto md:w-1/2 lg:xl:w-1/3"
        v-for="post in filteredPosts()"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </main>
</template>

<script setup>
import store from "../store";
import { computed, onMounted, reactive, ref, watch } from "vue";
import Toolbar from "../components/Toolbar.vue";
import Alert from "../components/Alert.vue";
import PostCard from "../components/PostCard.vue";

const search = computed(() => store.state.search);
const posts = computed(() => store.state.posts.data);

function filteredPosts() {
  return posts.value.filter((e) => {
    return e.title.toUpperCase().indexOf(search.value.toUpperCase()) > -1;
  });
}
store.dispatch("getPosts", { limit: 9 });
</script>

<style scoped></style>
