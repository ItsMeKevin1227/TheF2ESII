<script>
import AddMission from '@/components/AddMission'
import MissionList from '@/components/MissionList'
import CountdownClock from '@/components/CountdownClock'
import { TOGGLE_SHOW_MENU } from '@/stores/constants/mutation-types'

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
  computed: {
    isWorking () {
      return this.$store.state.main.isWorking
    },
    isPlaying () {
      return this.$store.state.main.isPlaying
    },
    isLarge () {
      return this.$store.getters.isLargeScreen
    },
    isMobile () {
      return false
    },
    percentage () {
      return this.$store.getters.undonePercentage
    },
    todoList () {
      return this.$store.getters.threeUndoList
    },
    showMenu () {
      return this.$store.state.screen.showMenu
    }
  },
  methods: {
    toggleMenu () {
      return this.$store.commit(TOGGLE_SHOW_MENU)
    }
  }

}
</script>
<template src="./Main.html"></template>
<style lang="less" src="./Main.less"></style>
