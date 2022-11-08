import { createStore } from "vuex";
import axiosClient from "../axios";


const store = createStore({
  state: {
    user: {
      data: null,
      token: sessionStorage.getItem("TOKEN"),
    },
    search: "",
    posts: {
      data: []
    },
    post: {
      data: null,
    },
    categories: {
      data: null,
    },
    notification: {
      show: false,
      type: 'success',
      message: ''
    },
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({ data }) => {
          commit('setUser', data.user)
          commit('setToken', data.token)
          commit("notify", {
            message: "Zarejestrowano",
            type: "success"
          })
          return data
        }).catch(error => {
          commit("notify", "Spróbuj ponowie", "error")
          throw error
        })
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({ data }) => {
          commit('setUser', data.user)
          commit('setToken', data.token)
          commit("notify", {
            message: "Zalogowano",
            type: "success"
          })
        }).catch(error => {
          commit("notify", {
            message: "Spróbuj ponownie",
            type: "error"
          })
          throw error;
        })
    },
    logout({ commit }) {
      return axiosClient.post('/logout')
        .then(({ response }) => {
          commit('logout')
          commit("notify", {
            message: "Wylogowano",
            type: "success"
          })
          return response
        })
    },
    getPosts({ commit }, params) {
      return axiosClient.get('/posts', {
        params
      })
        .then(({ data }) => {
          commit('setPosts', data.data)
        })
    },
    getCategories({ commit }, params) {
      return axiosClient.get('/categories', {
        params
      }).then(({ data }) => {
        commit('setCategories', data.data)
      })
    },
    getPost({ commit }, id) {
      return axiosClient.get(`/posts/${id}`)
        .then(({ data }) => {
          commit('setPost', data.data)
        })
    },
    updatePost({ commit, state }, id) {
      return axiosClient.put(`/posts/${id}`, state.post.data).then(() => {
        commit("notify", {
          message: "Post zaktualizowany",
          type: "success"
        })
      }).catch(() => {
        commit("notify", {
          message: "Coś poszło nie tak - spróbuj ponownie",
          type: "error"
        })
      })
    },
    getUser({ commit }, id) {
      return axiosClient.get(`/user`)
        .then(({ data }) => {
          commit('setUser', data)
        })
    },
    deletePost({ commit }, id) {
      return axiosClient.delete(`/posts/${id}`).then(() => {
        commit("notify", {
          message: "Post usunięty",
          type: "success"
        })
      }).catch(() => {
        commit("notify", {
          message: "Coś poszło nie tak - spróbuj ponownie",
          type: "error"
        })
      })
    },
    createPost({ commit, state }, post) {
      let data = post
      data['user_id'] = state.user.data.id
      return axiosClient.post('/posts', data).then((result) => {
        commit("notify", {
          message: "Post dodany",
          type: "success"
        })
        return result
      }).catch(() => {
        commit("notify", {
          message: "Coś poszło nie tak - spróbuj ponownie",
          type: "error"
        })
      })
    }
  },
  mutations: {
    setToken(state, token) {
      state.user.token = token
      sessionStorage.setItem("TOKEN", token)
    },
    setUser(state, user) {
      state.user.data = user
    },
    setPost(state, post) {
      state.post.data = post
    },
    setSearch(state, search) {
      state.search = search
    },
    setPosts(state, posts) {
      state.posts.data = posts
    },
    setCategories(state, categories) {
      state.categories.data = categories
    },
    logout(state) {
      state.user.data = null
      state.user.token = null
      sessionStorage.removeItem("TOKEN")
    },
    notify(state, { message, type }) {
      state.notification.message = message
      state.notification.type = type
      state.notification.show = true
      setTimeout(() => {
        state.notification.show = false
      }, 4000)
    }
  },
  modules: {},
})
export default store
