import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing: null,
    artist: null
  },
  getters: {
    playingSong: state => (state.playing ? state.playing : '尚未播放'),
    playingArtist: state => (state.artist ? state.artist : '尚未播放')
  },
  mutations: {
    SWITCH_SONG (state, payload) {
      state.playing = payload.songName
      state.artist = payload.songArtist
    }
  }
})
