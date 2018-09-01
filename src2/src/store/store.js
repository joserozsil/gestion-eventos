import Vuex from 'vuex'
import axios from 'axios'

const store = new Vuex.Store({
    state: {
        user: {},
        count: 0,
        token: ''
    },
    mutations: {
        setDataUser (state, user) {
            Object.assign(state.user, user)
        },
        setToken(state, token) {
            state.token = token 
        },
        increment (state) {
            state.count++
        }
    },
    computed: {
        getToken() {
            return this.state.token
        }
    }
  })

  export default store