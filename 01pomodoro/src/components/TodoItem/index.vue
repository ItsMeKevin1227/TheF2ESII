<script>
import { ACTIVE_TODO } from '@/stores/constants/mutation-types'
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default () {}
    }
  },
  methods: {
    toggleCurrentMission (id) {
      return this.$store.commit(ACTIVE_TODO, id)
    }
  }
}

</script>
<template src="./TodoItem.html"></template>
<style lang="less" src="./TodoItem.less"></style>
