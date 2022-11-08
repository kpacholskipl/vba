<template>
  <Toolbar></Toolbar>
  <Alert></Alert>
  <main class="bg-gray-100 mx-auto rounded-lg p-2 h-min-full max-w-7xl">
    <div class="flex flex-wrap mb-4">
      <div class="p-16 w-2/3">
        <div
          v-if="post && post.data"
          class="m-h-48 rounded-lg border-2 border-gray-200 bg-white overflow-hidden ..."
        >
          <div
            class="h-5 w-full bg-red-500 bg-yellow-300 bg-green-400 bg-blue-500"
            :class="post.data.category.color"
          />
          <div class="py-2 px-4">
            <p class="text-3xl mb-2 font-bold">
              {{ post.data.title }}
            </p>
            <div class="text-left" v-html="post.data.content" />
            <p>
              Autor: {{ post.data.user.name }} Data: {{ post.data.created_at }}
            </p>
          </div>
        </div>
      </div>
      <div class="p-2 pt-12 w-1/3">
        <div class="py-4 w-auto" v-for="post in posts.data">
          <PostCard :post="post" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import store from "../store";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import Toolbar from "../components/Toolbar.vue";
import Alert from "../components/Alert.vue";
import PostCard from "../components/PostCard.vue";

const post = computed(() => store.state.post);
const posts = computed(() => store.state.posts);

const route = useRoute();
store.dispatch("getPost", route.params.id);
store.dispatch("getPosts");
</script>

<style scoped></style>
