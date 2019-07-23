<template>
  <div id="app">
    <GameRule v-if="isGameRuleOpen" @closeLightBox="closeLightBox" />
  </div>
</template>

<script>
import GameRule from '@/components/GameRule'

export default {
  name: 'app',
  components: {
    GameRule
  },
  data () {
    return {
      isGameRuleOpen: false
    }
  },
  methods: {
    closeLightBox (payload) {
      switch (payload) {
        case 'gameRule':
          this.isGameRuleOpen = false
          break

        default:
          break
      }
    }
  },
  mounted () {
    this.isGameRuleOpen = true
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
  background-image: url('./assets/bg-all.png');
  background-size: contain;
  background-position: 50% 50%;
}
</style>
