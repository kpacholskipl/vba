<template>
  <Toolbar></Toolbar>
  <Alert></Alert>
  <div
    class="bg-gray-100 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Zarejestruj się
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Masz już konto?
          <a
            href="/login"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >Zaloguj się</a
          >
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit="register">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="sr-only">Nazwa użytkownika</label>
            <input
              id="name"
              name="name"
              type="text"
              v-model="user.name"
              autocomplete="name"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border-b-0 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Nazwa użytykownika"
            />
            <label for="email-address" class="sr-only">Email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="user.email"
              autocomplete="email"
              required
              class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Hasło</label>
            <input
              id="password"
              name="password"
              v-model="user.password"
              type="password"
              autocomplete="current-password"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Hasło"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Zarejestruj się
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Toolbar from "../components/Toolbar.vue";
import { ref } from "vue";
import store from "../store";
import { useRouter } from "vue-router";
import Alert from "../components/Alert.vue";

const router = useRouter();
const user = {
  name: "",
  email: "",
  password: "",
};
const loading = ref(false);
const errors = ref({});

function register(ev) {
  ev.preventDefault();
  store.dispatch("register", user).then(() => {
    router.push({ name: "Home" });
  });
}
</script>

<style scoped></style>
