import { TICK_TOC } from '@/stores/constants/mutation-types'

import {
  ADD_TOMATO_ON_CURRENT,
  ADD_TOMATO_ON_REPORT,
  FINISH_COUNTDOWN,
  PLAY_BREAK_ALARM,
  PLAY_WORK_ALARM
} from '@/stores/constants/actions'

let interval = null

export const startClock = (commit, dispatch, state) => {
  if (interval) clearInterval(interval)
  let count = 0
  let total = state.countDown
  let isWorking = state.isWorking
  interval = setInterval(() => {
    commit(TICK_TOC)
    count++
    if (count === total) {
      clearInterval(interval)
      dispatch(FINISH_COUNTDOWN)
      console.log(isWorking, state.isWorking)
      if (isWorking) {
        dispatch(ADD_TOMATO_ON_CURRENT)
        dispatch(ADD_TOMATO_ON_REPORT)
        dispatch(PLAY_WORK_ALARM)
      } else {
        dispatch(PLAY_BREAK_ALARM)
      }
      return false
    }
  }, 1000)
}

export const stopClock = () => {
  if (interval) {
    clearInterval(interval)
  }
}
