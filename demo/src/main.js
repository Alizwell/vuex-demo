import Vue from 'vue'
import Vuex from 'vuex'
import './css/style.css'
import Counter from './components/Counter.vue'
// import store from './store/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 11,
    id: 22,
    name: 'xuey',
    todos: [{
        id: 1,
        text: '...',
        done: true
      },
      {
        id: 2,
        text: '...',
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment(state, { amount = 1}) {
      return state.count+= amount;
    }
  },
  actions:{
    increment ({commit}, amount) {
      setTimeout(() => {        
        commit('increment',amount);
      }, 100);
    }
  }
})

// const Counter = {
//   template: `
//     <div  v-on:click="increment" >{{ count }}</div>
//   `,
//   computed: {
//     count() {
//       return this.$store.state.count
//     }
//   },
//   methods: {
//     increment() {
//       this.$store.commit('increment')
//     }
//   }
// }

new Vue({
  el: '#app',
  store,
  template: `
  <Counter></Counter>
  `,
  components: {
    Counter
  }
})