import Vuex from 'vuex'
import axios from 'axios'
import config from '../config'

const store = new Vuex.Store({
    state: {
        user: {},
        token: ''
    },
    mutations: {
        setDataUser (state, user) {
            Object.assign(state.user, user)
        },
        setToken(state, token) {
            state.token = token 
        }
    },
    getters: {
        getUser: state => {
            return state.user
        }
    }
  })

  export default store