<script>
export default {
  name: 'ShopPanel',
  computed: {
    totalCost () {
      return this.$store.getters.totalCost
    }
  }
}
</script>
<template src="./ShopPanel.html"></template>
<style lang="less" src="./ShopPanel.less"></style>
