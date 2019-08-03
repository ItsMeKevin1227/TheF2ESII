<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlayingInfo',
  data () {
    return {
      isHeartHover: false
    }
  },
  computed: {
    ...mapGetters(['playingSong', 'playingArtist']),
    heartToggle () {
      return this.isHeartHover ? 'heart-full' : 'heart'
    }
  }
}
</script>
<template src="./PlayingInfo.html"></template>
<style lang="less" src="./PlayingInfo.less"></style>
