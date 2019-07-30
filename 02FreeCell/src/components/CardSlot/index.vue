<script>
import PokeCard from '@/components/PokeCard'
import draggable from 'vuedraggable'
import draggleFunction from '@/mixins/dragFunction.js'

export default {
  props: ['slotData', 'name'],
  mixins: [draggleFunction],
  components: {
    PokeCard,
    draggable
  },
  computed: {
    slotHeight () {
      if (this.slotData.cards.length === 0) return 160
      return (this.slotData.cards.length - 1) * 35 + 160
    },
    cardLists: {
      get () {
        return this.$store.state.slots.bottomPokeSlots.filter(slot => slot.name === this.name)[0].cards
      },
      set (value) {
        this.$store.commit('updateBottomPokeSlots', {
          value,
          name: this.name
        })
      }
    },
    className () {
      if (this.$store.state.time > 0) return 'poke_card started'
      else return 'poke_card'
    }
  },
  methods: {
    myTop (index) {
      if (index === 0) return 0
      let eleNum = 0
      for (let i = 0; i < index; i += 1) {
        eleNum += 1
        if (this.slotData.cards[i].childElement.length > 0) {
          eleNum = eleNum + this.slotData.cards[i].childElement.length
        }
      }
      return eleNum
    },
    // draggable 套件的 option 設定
    getOptions () {
      return {
        animation: 150,
        group: 'cardSlot',
        ghostClass: 'ghost',
        sort: false,
        onEnd: this.onEnd
      }
    }
  }
}
</script>
<template src="./CardSlot.html"></template>
<style lang="less" src="./CardSlot.less"></style>
