<script>
export default {
  name: 'PlayItem',
  props: ['songName', 'songIndex', 'songTime'],
  methods: {
    playSong () {
      this.$store.commit('SWITCH_SONG', this.songName)
    }
  }
}
</script>
<template src="./PlayItem.html"></template>
<style lang="less" src="./PlayItem.less"></style>
