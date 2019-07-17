<script>
import AddMission from '@/components/AddMission'
import MissionList from '@/components/MissionList'
import CountdownClock from '@/components/CountdownClock'
export default {
  name: 'Main',
  data () {
    return {
      width: null
    }
  },
  components: {
    AddMission, MissionList, CountdownClock
  },
  mounted () {
    this.width = this.$refs.countdownClock.clientWidth
  }
}
</script>
<template src="./Main.html"></template>
<style lang="less" src="./Main.less"></style>
