<script>
import PaymentPanel from '@/components/PaymentPanel'
import ShopPanel from '@/components/ShopPanel'
export default {
  name: 'PayByShop',
  components: {
    PaymentPanel, ShopPanel
  },
  mounted () {
    this.$store.commit('UPDATE_STEP', 2)
  }
}
</script>
<template src="./PayByShop.html"></template>
<style lang="less" src="./PayByShop.less"></style>
