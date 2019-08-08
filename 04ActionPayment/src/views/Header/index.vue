<script>
import StepBar from '@/components/StepBar'
export default {
  name: 'Title',
  components: {
    StepBar
  },
  computed: {
    step () {
      return this.$store.state.step
    },
    title () {
      return this.$store.state.headerTitle
    }
  }
}
</script>
<template src="./Header.html"></template>
<style lang="less" src="./Header.less"></style>
