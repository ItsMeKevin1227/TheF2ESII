import {
  SET_SCREEN_SIZE,
  TOGGLE_SHOW_MENU
} from '@/stores/constants/mutation-types'

const screen = {
  state: {
    width: window.innerWidth,
    height: window.innerHeight,
    showMenu: false
  },
  getters: {
    isLargeScreen (state) {
      return state.width >= 1280
    },
    isMobileScreen (state) {
      return state.width <= 992
    }
  },
  mutations: {
    [SET_SCREEN_SIZE] (state, payload) {
      state.width = payload.width
      state.height = payload.height
    },
    [TOGGLE_SHOW_MENU] (state) {
      state.showMenu = !state.showMenu
    }
  }
}

export default screen
