<script>
export default {
  name: 'OrderItem',
  props: ['itemId'],
  data () {
    return {
      amount: 1
    }
  },
  computed: {
    itemAmount () {
      return this.$store.state.shopCart[this.itemId].amount || 0
    },
    itemDescription () {
      return this.$store.state.shopCart[this.itemId].description || ''
    },
    itemMoney () {
      return this.$store.state.shopCart[this.itemId].cost || 0
    },
    itemName () {
      return this.$store.state.shopCart[this.itemId].name || ''
    }
  },
  methods: {
    amountChange (value) {
      this.$store.commit('UPDATE_COST', {
        id: this.itemId,
        amount: this.amount
      })
    }
  }
}
</script>
<template src="./OrderItem.html"></template>
<style lang="less" src="./OrderItem.less"></style>
