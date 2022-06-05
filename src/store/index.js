import { createStore } from 'vuex'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    colourCode: 'blue'
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter
    }
  },
  mutations: {
    
      increaseCounter(state, randomNumber) {
        state.counter+=randomNumber
      },
      decreaseCounter(state, randomNumber) {
        state.counter-=randomNumber
      },
      setColourCode(state, newValue){
        state.colourCode = newValue
      }
  },
  actions: {
    increaseCounter({ commit }){
         axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
       commit('increaseCounter',response.data)
      })
    },

    decreaseCounter({ commit }){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
    commit('decreaseCounter',response.data)
   })
 },
    setColourCode({commit}, newValue){
      commit('setColourCode', newValue)
    }
  },
  modules: {
  }
})
