<script>
import RoomName from '@/components/RoomName'
import RoomChoosePanel from '@/components/RoomChoosePanel'
import RoomContactInformation from '@/components/RoomContactInformation'
import singleRoom from '../../assets/background01.png'

export default {
  name: 'Home',
  components: {
    RoomName, RoomChoosePanel, RoomContactInformation
  },
  computed: {
    hotelImage () {
      return `background-image: url('${singleRoom}')`
    }
  }
}
</script>
<template src="./Home.html"></template>
<style lang="less" src="./Home.less"></style>
