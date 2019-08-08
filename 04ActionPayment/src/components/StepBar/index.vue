<script>
export default {
  name: 'StepBar',
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  computed: {
    stepFirst () {
      return this.step >= 1
    },
    stepSecond () {
      return this.step >= 2
    },
    stepThird () {
      return this.step === 3
    }
  }
}
</script>
<template src="./StepBar.html"></template>
<style lang="less" src="./StepBar.less"></style>
