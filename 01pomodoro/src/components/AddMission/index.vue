<script>
import { ADD_NEW_TODO } from '@/stores/constants/mutation-types'

export default {
  name: 'AddMission',
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addMission () {
      const trimTitle = this.todoText.trim()
      if (trimTitle) {
        this.$store.commit(ADD_NEW_TODO, trimTitle)
        this.todoText = ''
      }
    }
  }
}
</script>
<template src="./AddMission.html"></template>
<style lang="less" src="./AddMission.less"></style>
