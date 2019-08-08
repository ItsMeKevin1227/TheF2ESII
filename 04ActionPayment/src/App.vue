<template>
  <div id="app">
    <div class="decoration-container">
      <span class="decoration-block decoration-block1"></span>
      <span class="decoration-block decoration-block2"></span>
      <span class="decoration-block decoration-block3"></span>
      <span class="decoration-block decoration-block4"></span>
      <span class="decoration-block decoration-block5"></span>
      <span class="decoration-block decoration-block6"></span>
    </div>
    <Header />
    <router-view/>
    <footer>Copy right Hello I'm Footer :)</footer>
  </div>
</template>
<script>
import Header from '@/views/Header'
export default {
  name: 'App',
  components: {
    Header
  }

}
</script>

<style lang="less" scoped>
#app {
  position: relative;
  min-height: 100vh;
  padding-top: 15px;
  .decoration-container{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 15px;
  }
  .decoration-block{
    display: block;
  }
  .decoration-block1{
    width: 14%;
    background-color: #B3ABA6;
  }
  .decoration-block2{
    width: 21%;
    background-color: #FF8F14;
  }
  .decoration-block3{
    width: 9%;
    background-color: #173060;
  }
  .decoration-block4{
    width: 22%;
    background-color: #F65453;
  }
  .decoration-block5{
    width: 19%;
    background-color: #CC251B;
  }
  .decoration-block6{
    width: 15%;
    background-color: #62A1D2;
  }
  footer{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: @bg-footer;
    color: #fff;
  }
}// for m
@media (max-width: 980px) {
  #app {
    padding: 10px 0 90px;

    .decoration-container {
      height: 10px;
    }
  }
}
</style>
