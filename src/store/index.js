import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  getters: {},
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

        return true
      } catch (error) {
        console.log(error)
        commit('revokeAuthentication')

        return false
      }
    }
  },
  modules: {}
})
