import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timeLeft: 0
  },
  mutations: {
    setCountdownTime (state, time) {
      this.state.timeLeft = time
    }
  },
  actions: {}
})
