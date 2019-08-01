<template>
  <div id="app">
    <div class="top-section">
      <LeftPanel />
      <Main />
      <RightPanel />
    </div>
    <PlayPanel class="bottom-section" />
  </div>
</template>

<script>
import LeftPanel from '@/views/LeftPanel'
import Main from '@/views/Main'
import RightPanel from '@/views/RightPanel'
import PlayPanel from '@/views/PlayPanel'
export default {
  name: 'app',
  components: {
    LeftPanel, Main, RightPanel, PlayPanel
  }
}
</script>

<style lang="less">
#app {
  height: 100vh;
  overflow: hidden;
  .top-section{
    display: flex;
    width: 100%;
    height: 84vh;
  }
  .bottom-section{
    display: flex;
    height: 16vh;
  }
}
</style>
