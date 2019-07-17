<script>
export default {
  name: 'CountdownClock',
  props: {
    setTimer: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      default: 80
    },
    border: {
      type: Number,
      default: 8
    },
    color: {
      type: String,
      default: '#FF4384'
    },
    fontSize: {
      type: Number,
      default: 30
    }
  },
  data () {
    return {
      timeLeft: this.setTimer,
      dashLen: (100 - this.border / 2) * Math.PI * 2
    }
  },
  computed: {
    countDown () {
      let time = this.timeLeft
      if (time <= 0) {
        return '00:00:00'
      } else {
        let result = []
        result.push(Math.floor(time / 3.6e+6))
        result.push(Math.floor(time % 3.6e+6 / 60000))
        result.push(Math.floor(time % 60000 / 1000))
        return result.map(x => x < 10 ? '0' + x : x).join(':')
      }
    },
    dashOffset () {
      return this.dashLen - this.timeLeft / this.setTimer * this.dashLen
    }
  },
  mounted () {
    this.lastDate = Date.now()
    this.interval = setInterval(() => {
      let curDate = Date.now()
      let diff = Math.round((curDate - this.lastDate) / 1000) * 1000
      this.timeLeft -= diff
      if (this.timeLeft <= 0) {
        clearInterval(this.interval)
      }
      if (diff >= 1000) {
        this.lastDate = curDate
      }
    }, 1000)
  }
}
</script>
<template src="./CountdownClock.html"></template>
<style lang="less" src="./CountdownClock.less"></style>
