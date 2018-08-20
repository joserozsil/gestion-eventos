import Vuex from 'vuex'

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
    }
  })

  export default store