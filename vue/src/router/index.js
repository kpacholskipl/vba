import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import PostPage from "../pages/PostPage.vue";
import PostsAdminPage from "../pages/PostsAdminPage.vue";
import PostAdminPage from "../pages/PostAdminPage.vue";
import NotFound from "../pages/NotFound.vue";
import CreatePost from "../pages/CreatePost.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    meta: { requiresAuth: false },
    component: HomePage
  },
  {
    path: "/posts/:id",
    name: "Post",
    meta: { requiresAuth: false },
    component: PostPage
  },
  {
    path: "/posts-create",
    name: "CreatePost",
    meta: { requiresAuth: false },
    component: CreatePost
  },
  {
    path: "/admin/posts",
    name: "PostsAdmin",
    meta: { requiresAuth: true },
    component: PostsAdminPage
  },
  {
    path: "/admin/posts/:id",
    name: "PostAdmin",
    meta: { requiresAuth: true },
    component: PostAdminPage
  },
  {
    path: "/register",
    name: "Register",
    meta: { requiresAuth: false },
    component: RegisterPage
  },
  {
    path: "/login",
    name: "Login",
    meta: { requiresAuth: false },
    component: LoginPage
  },
  {
    path: "/404",
    name: "404",
    meta: { requiresAuth: false },
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
