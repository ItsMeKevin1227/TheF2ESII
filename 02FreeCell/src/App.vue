<template>
  <div id="app">
    <svg-icon iconClass="logo-bk"
              className="logo-bk"
              :iconWidth="340"
              :iconHeight="62" />
    <GameContainer></GameContainer>
    <!-- gameRule -->
    <MessageBox v-if="isGameRuleOpen" panelType="gameRule" @closeLightBox="closeLightBox">
      <template #title>
        <div class="title">
          <svg-icon iconClass="bone" :iconWidth="40" :iconHeight="40" />
          HOW TO PLAY?
          <svg-icon iconClass="bone" :iconWidth="40" :iconHeight="40" />
        </div>
      </template>
      <template #main>
        <div class="text-content">
          Freecell is a one-deck solitaire card game. All cards are dealt into 8 tableau piles. Four Cells (in the top left corner of the screen) and four foundation piles (top right hand corner) are placed above the tableau piles. The object of the game is to build up all cards on foundations from Ace to King by following suit. You win when all 52 cards are moved there, 13 to a pile. Top cards of tableau piles and cards from Cells are available to play. You can build tableau piles down by alternating color. Only one card at a time can be moved. The top card of any tableau pile can also be moved to any Cell. Each Cell (or Reserve space) may contain only one card. Cards in the cells can be moved to the foundation piles or back to the tableau piles, if possible. The rules state that you can move only one card at a time, but you can move group of cards in the proper sequence if you have enough free (empty) Cells and/or tableau piles.
        </div>
      </template>
    </MessageBox>
    <!-- newGame -->
    <MessageBox v-if="isNewGameOpen" panelType="newGame" @closeLightBox="closeLightBox">
      <template #title>
        <div class="title">
          <svg-icon iconClass="bone" :iconWidth="40" :iconHeight="40" />
          NEW GAME
          <svg-icon iconClass="bone" :iconWidth="40" :iconHeight="40" />
        </div>
      </template>
      <template #main>
        <div class="button-content">
          <button>Quit and Start a New Game</button>
          <button>Restart This Game</button>
          <button>Keep Playing</button>
        </div>
      </template>
    </MessageBox>
    <!-- gameOver -->
    <MessageBox v-if="isGameOver" panelType="gameOver" @closeLightBox="closeLightBox">
      <template #title>
        <div class="title">
          <svg-icon iconClass="bone" :iconWidth="40" :iconHeight="40" />
          No More Moves
          <svg-icon iconClass="bone" :iconWidth="40" :iconHeight="40" />
        </div>
      </template>
      <template #main>
        <div class="button-content">
          <button>Quit and Start a New Game</button>
          <button>Restart This Game</button>
          <button>Go back and undo some moves</button>
        </div>
      </template>
    </MessageBox>
  </div>
</template>

<script>
import MessageBox from '@/components/MessageBox'
import GameContainer from '@/views/GameContainer'

export default {
  name: 'app',
  components: {
    MessageBox, GameContainer
  },
  data () {
    return {
      isGameRuleOpen: false,
      isNewGameOpen: false,
      isGameOver: false
    }
  },
  methods: {
    closeLightBox (payload) {
      switch (payload) {
        case 'gameRule':
          this.isGameRuleOpen = false
          break
        case 'newGame':
          this.isNewGameOpen = false
          break
        case 'gameOver':
          this.isGameOver = false
          break

        default:
          break
      }
    }
  },
  mounted () {
    // this.isGameRuleOpen = true
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
  background-image: url('./assets/bg-all.png');
  background-size: contain;
  background-position: 50% 50%;
  padding: 52px 84px;
  .logo-bk {
    position: absolute;
    top: 52px;
    left: 0;
  }
}

</style>
