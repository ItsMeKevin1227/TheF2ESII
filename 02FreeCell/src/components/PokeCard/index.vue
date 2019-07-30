<script>
import draggable from 'vuedraggable'
import draggleFunction from '@/mixins/dragFunction.js'
export default {
  name: 'PokeCard',
  props: {
    position: {
      required: false
    },
    className: {
      required: false,
      default: 'poke_card'
    },
    top: {
      required: false
    },
    cardData: {
      required: false,
      type: Object,
      default: null
    },
    value: {
      required: false,
      type: Array,
      default: null
    },
    isSub: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  mixins: [draggleFunction],
  components: {
    draggable
  },
  methods: {
    emitter (value) {
      this.$emit('input', value)
    },
    getOptions () {
      return {
        animation: 150,
        group: 'cardSlot',
        ghostClass: 'ghost',
        sort: false
      }
    }
  },
  computed: {
    mytop () {
      if (this.position === 'target') return 0
      else if (this.isSub === false) return this.top
      else return 35
    },
    imgUrl () {
      return require('@/assets/poker-card/' + this.cardData.id + '.svg')
    },
    realValue () {
      return this.value ? this.value : this.cardData.childElement
    },
    isStarted () {
      return this.$store.state.isStarted
    }
  }
}
</script>
<template src="./PokeCard.html"></template>
<style lang="less" src="./PokeCard.less"></style>
