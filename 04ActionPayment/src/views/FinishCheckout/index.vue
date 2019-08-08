<script>
import FinishPanel from '@/components/FinishPanel'
export default {
  name: 'FinishCheckout',
  components: {
    FinishPanel
  },
  mounted () {
    this.$store.commit('UPDATE_STEP', 3)
  }
}
</script>
<template src="./FinishCheckout.html"></template>
<style lang="less" src="./FinishCheckout.less"></style>
