function checkCompletedLoop (parentCards) {
  if (parentCards.length > 0 && parentCards[0].childElement.length === 1) {
    return checkCompletedLoop(parentCards[0].childElement) + 1
  } else {
    return 1
  }
}

export default {
  methods: {
    onStart () {},
    onEnd (option) {
      this.checkAllPokeIsFixed()
      this.checkCompleted()
      this.checkMoveTimeAndPushUndoState()
      // console.log(this.$store.state.slots.targetSlots);
    },
    onMove (option) {
      //  都得放最後一個
      if (option.willInsertAfter === false) return false
      // 移動的牌 Dom
      // let dragged = option.dragged;
      // 移動的牌的資料
      let draggedElementData = option.draggedContext.element
      if (draggedElementData.fixed === true) return false
      // 目標插槽的 Dom
      let targetDom = option.to
      // 目標插槽的資料
      let targetSlotsDataList = option.relatedContext.list
      // 如果是排序的插槽 card_slot
      if (targetDom.className.includes('card_slot')) {
        if (targetSlotsDataList.length === 0) return true
      }
      // 如果目標是暫存的插槽 free_slot 則只能放一個
      if (targetDom.className.includes('free_slot')) {
        if (
          targetSlotsDataList.length === 0 &&
          draggedElementData.childElement.length === 0
        ) {
          return true
        }
      }
      // 如果是最終插槽 target_slot 則需驗證
      if (targetDom.className.includes('target_slot')) {
        // 當最終插槽沒有東西 而且拖動的物件為 Ａ 的時候可以放
        if (
          Number(draggedElementData.number) === 1 &&
          targetSlotsDataList.length === 0
        ) {
          return true
        }
      }
      // 如果目標是牌插槽
      if (targetDom.className.includes('poke_card')) {
        if (targetSlotsDataList.length !== 0) return false
        let targetCardPosition = targetDom.getAttribute('data-position')
        let targetCardNumber = Number(targetDom.getAttribute('data-number'))
        let targetCardColor = targetDom.getAttribute('data-color')
        let targetCardFlower = targetDom.getAttribute('data-flower')
        if (targetDom.getAttribute('data-fixed')) return false
        if (targetCardPosition === 'free') return false
        if (targetCardPosition === 'target') {
          if (draggedElementData.childElement.length > 0) return false
          if (
            targetCardNumber + 1 === Number(draggedElementData.number) &&
            targetCardFlower === draggedElementData.flower
          ) {
            return true
          }
        }
        if (targetCardPosition === 'bottom') {
          if (
            Number(draggedElementData.number) + 1 === targetCardNumber &&
            draggedElementData.color !== targetCardColor
          ) {
            return true
          }
        }
      }
      return false
    },
    checkAllPokeIsFixed () {
      let bottomPokeSlots = this.$store.state.slots.bottomPokeSlots
      bottomPokeSlots.forEach(slots => {
        slots.cards.forEach((card, index, array) => {
          if (index === array.length - 1) card.fixed = false
        })
      })
    },
    checkCompleted () {
      let targetSlots = this.$store.state.slots.targetSlots
      if (targetSlots.every(slot => checkCompletedLoop(slot.cards) === 13)) {
        this.$bus.$emit('onCompletedGame')
      }
    },
    checkMoveTimeAndPushUndoState () {
      let undoState = this.$store.state.undoState
      let parseSlots = JSON.stringify(this.$store.state.slots)
      let lastStep = undoState[undoState.length - 1]
      if (parseSlots !== lastStep) {
        this.$store.commit('addMoveTimes')
        this.$store.commit('addUndoState')
      }
    }
  }
}
