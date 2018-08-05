import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 11
  },
  mutations: {
    increment(state) {
      return state.count++;
    }
  }
})

export {
  store
}