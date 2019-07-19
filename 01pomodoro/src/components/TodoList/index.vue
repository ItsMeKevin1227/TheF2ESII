<script>
import TodoItem from '@/components/TodoItem'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    todoList () {
      return this.$store.getters.threeUndoList
    }
  }
}
</script>
<template src="./TodoList.html"></template>
<style lang="less" src="./TodoList.less"></style>
