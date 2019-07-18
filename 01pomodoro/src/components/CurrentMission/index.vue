<script>
import _ from 'lodash'
export default {
  name: 'CurrentMission',
  data () {
    return {
      currentMission: 'the First thing to do today'
    }
  },
  computed: {
    minutes () {
      return _.padStart(Math.floor(this.countDown / 60), 2, '0')
    },
    seconds () {
      return _.padStart(this.countDown % 60, 2, '0')
    },
    countDown () {
      return this.$store.state.main.countDown
    }
  }
}
</script>
<template src="./CurrentMission.html"></template>
<style lang="less" src="./CurrentMission.less"></style>
