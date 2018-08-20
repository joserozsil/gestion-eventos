import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        user: {},
        count: 0
    },
    mutations: {
        setDataUser (state, user) {
            Object.assign(state.user, user)
        },
        increment (state) {
            state.count++
        }
    }
  })

  export default store