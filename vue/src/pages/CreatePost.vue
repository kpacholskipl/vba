<template>
  <Toolbar />
  <Alert></Alert>
  <main class="bg-gray-100 mx-auto rounded-lg p-2 h-min-full max-w-7xl">
    {{ title }}
    <div class="flex items-center flex-col">
      <div class="d-block w-full p-10">
        <label
          for="title"
          class="form-label text-left inline-block mb-2 text-gray-700"
          >Tytuł posta</label
        >
        <input
          v-model="post.title"
          type="text"
          name="title"
          id="title"
          class="h-10 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="d-block w-full p-10 pt-0">
        <label
          for="content"
          class="form-label text-left inline-block mb-2 text-gray-700"
          >Treść posta</label
        >
        <textarea
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="content"
          rows="20"
          v-model="post.content"
        ></textarea>
      </div>
      <div class="d-block w-full p-10 pt-0">
        <label
          for="category"
          class="form-label text-left inline-block mb-2 text-gray-700"
          >Treść posta</label
        >
        <select v-model="post.category_id" name="category" id="category">
          <option v-for="category in categories" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="d-block w-full p-10 pt-0">
        <button
          type="button"
          @click="updatePost"
          class="mr-2 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out"
        >
          Dodaj post i przejdź do strony startowej
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "Vue";

import Toolbar from "../components/Toolbar.vue";
import Alert from "../components/Alert.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const categories = computed(() => store.state.categories.data);
const post = {
  title: "",
  content: "",
  category_id: null,
  user_id: null,
};
store.dispatch("getCategories");

function updatePost() {
  store.dispatch("createPost", post).then((data) => {
    console.log(data.data.data.id);
    router.push({ name: "Post", params: { id: data.data.data.id } });
  });
}
</script>

<style scoped></style>
