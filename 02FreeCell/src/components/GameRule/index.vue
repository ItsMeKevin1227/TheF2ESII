<script>
export default {
  name: 'GameRule',
  methods: {
    closeLightBox () {
      this.$emit('closeLightBox', 'gameRule')
    }
  }
}
</script>
<template src="./GameRule.html"></template>
<style lang="less" src="./GameRule.less"></style>
