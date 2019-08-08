<script>
import PaymentPanel from '@/components/PaymentPanel'
import AtmPanel from '@/components/AtmPanel'
export default {
  name: 'PayByATM',
  components: {
    PaymentPanel, AtmPanel
  },
  mounted () {
    this.$store.commit('UPDATE_STEP', 2)
  }
}
</script>
<template src="./PayByATM.html"></template>
<style lang="less" src="./PayByATM.less"></style>
