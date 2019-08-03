<script>
export default {
  name: 'PlayItem',
  props: ['songName', 'songIndex', 'songTime', 'songArtist'],
  data () {
    return {
      isHeartHover: false
    }
  },
  computed: {
    heartToggle () {
      return this.isHeartHover ? 'heart-full' : 'heart'
    }
  },
  methods: {
    addFavorite (songName) {},
    playSong () {
      this.$store.commit('SWITCH_SONG', {
        songArtist: this.songArtist,
        songName: this.songName,
        songTime: this.songTime
      })
    }
  }
}
</script>
<template src="./PlayItem.html"></template>
<style lang="less" src="./PlayItem.less"></style>
