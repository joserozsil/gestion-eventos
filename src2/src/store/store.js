import Vuex from 'vuex'
import axios from 'axios'
import config from '../config'

const store = new Vuex.Store({
    state: {
        user: {},
        token: '',
        loading: false
    },
    mutations: {
        setDataUser (state, user) {
            Object.assign(state.user, user)
        },
        setToken(state, token) {
            state.token = token 
        },
        updateUser(state, user) {
          state.user = user
        }, 
        setLoading(state, loading) {
          state.loading = loading
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    actions: {
        getUser(context) {
            context.commit('setLoading', true)
            return axios.post(`${config.API_URL}/token`, { token: localStorage.getItem('token') }, { headers: { authorization: localStorage.getItem('token') } })
            .then(resp => {
                context.commit('updateUser', resp.data)
                context.commit('setLoading', false)
            })
        }
    }
  })

  export default store