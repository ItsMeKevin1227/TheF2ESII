<script>
import OrderItem from '@/components/OrderItem'
import PaymentPanel from '@/components/PaymentPanel'
export default {
  name: 'OrderDetail',
  components: {
    OrderItem, PaymentPanel
  },
  computed: {
    totalCost () {
      return this.$store.getters.totalCost
    }
  },
  mounted () {
    this.$store.commit('UPDATE_STEP', 1)
  }
}
</script>
<template src="./OrderDetail.html"></template>
<style lang="less" src="./OrderDetail.less"></style>
