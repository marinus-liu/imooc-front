import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      sid: ''
    }
  },
  mutations: {
    setSid (state, sid) {
        state.sid = sid 
    }
 },
 actions: {
    
 }


})

export default store