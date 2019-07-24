<script>
export default {
  name: 'MessageBox',
  props: ['panelType'],
  methods: {
    closeLightBox () {
      this.$emit('closeLightBox', this.panelType)
    }
  }
}
</script>
<template src="./MessageBox.html"></template>
<style lang="less" src="./MessageBox.less"></style>
