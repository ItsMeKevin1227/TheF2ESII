<script>
export default {
  name: 'PayByCard',
  mounted () {
    this.$store.commit('UPDATE_STEP', 2)
  }
}
</script>
<template src="./PayByCard.html"></template>
<style lang="less" src="./PayByCard.less"></style>
