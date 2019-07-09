<script>
export default {
  name: 'AddMission',
  data () {
    return {
      missionText: ''
    }
  },
  methods: {
    addMission () {
      if (this.missionText === '') return
      console.log(this.missionText)
    }
  }
}
</script>
<template src="./AddMission.html"></template>
<style lang="less" src="./AddMission.less"></style>
