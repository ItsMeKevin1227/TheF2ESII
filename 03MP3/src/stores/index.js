import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing: null,
    artist: null
  },

  mutations: {
    SWITCH_SONG (state, songName) {
      state.playing = songName
    }
  }
})
