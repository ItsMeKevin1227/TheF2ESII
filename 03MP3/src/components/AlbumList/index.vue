<script>
import album1 from '@/assets/album-1.png'
import album2 from '@/assets/album-2.png'
export default {
  name: 'AlbumList',
  data () {
    return {
      albumList: [
        {
          name: 'Lover',
          year: '2019',
          cover: album1
        },
        {
          name: 'Reputation',
          year: '2017',
          cover: album2
        }
      ]
    }
  }
}
</script>
<template src="./AlbumList.html"></template>
<style lang="less" src="./AlbumList.less"></style>
