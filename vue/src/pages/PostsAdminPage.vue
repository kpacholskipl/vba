<template>
  <Toolbar />
  <Alert></Alert>
  <main class="bg-gray-100 mx-auto rounded-lg p-2 h-full max-w-7xl">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4text-center"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="post in posts">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ post.id }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left"
                  >
                    {{ post.title }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <button
                      type="button"
                      @click="goPost(post.id)"
                      class="mr-2 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out"
                    >
                      Edytuj
                    </button>

                    <button
                      type="button"
                      @click="deletePost(post.id)"
                      class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out"
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "Vue";

import Toolbar from "../components/Toolbar.vue";
import Alert from "../components/Alert.vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const posts = computed(() => store.state.posts.data);
store.dispatch("getPosts");

function deletePost(id) {
  store.dispatch("deletePost", id).then(() => {
    store.dispatch("getPosts");
  });
}
function goPost(id) {
  router.push({ name: "PostAdmin", params: { id: id } });
}
</script>

<style scoped></style>
