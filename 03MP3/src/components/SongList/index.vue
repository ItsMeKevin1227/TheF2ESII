<script>
import PlayItem from '@/components/PlayItem'
export default {
  name: 'SongList',
  components: {
    PlayItem
  },
  data () {
    return {
      songListTitle: 'Top Song',
      songList: [
        {
          name: 'You Need To Calm Down',
          time: '02:51',
          artist: 'Taylor Swift'
        },
        { name: 'ME!',
          time: '03:13',
          artist: 'Taylor Swift'
        },
        { name: 'Blank Space',
          time: '03:51',
          artist: 'Taylor Swift'
        },
        { name: 'Delicate',
          time: '03:52',
          artist: 'Taylor Swift'
        },
        { name: 'I Don’t Wanna Live Forever',
          time: '04:05',
          artist: 'Taylor Swift'
        },
        { name: 'I Knew You Were Trouble.',
          time: '03:39',
          artist: 'Taylor Swift'
        },
        { name: 'Shake It Off',
          time: '03:39',
          artist: 'Taylor Swift'
        }
      ]
    }
  }
}
</script>
<template src="./SongList.html"></template>
<style lang="less" src="./SongList.less"></style>
