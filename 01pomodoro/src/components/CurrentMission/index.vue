<script>
import _ from 'lodash'
import { TODDLE_TODO_DONE } from '@/stores/constants/mutation-types'

export default {
  name: 'CurrentMission',
  computed: {
    countDown () {
      return this.$store.state.main.countDown
    },
    currentMission () {
      return this.$store.getters.current
    },
    minutes () {
      return _.padStart(Math.floor(this.countDown / 60), 2, '0')
    },
    seconds () {
      return _.padStart(this.countDown % 60, 2, '0')
    }
  },
  methods: {
    toggleDone () {
      return this.$store.commit(TODDLE_TODO_DONE, this.currentMission.id)
    }
  }
}
</script>
<template src="./CurrentMission.html"></template>
<style lang="less" src="./CurrentMission.less"></style>
