
<script>
import { PLAY_OR_STOP } from '@/stores/constants/actions'

export default {
  name: 'CountdownClock',
  props: {
    value: {
      type: Number,
      default: 0
    },
    diameter: {
      type: Number,
      default: 60
    },
    stroke: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    circleDiameter () {
      return this.diameter - 6
    },
    circleRadius () {
      return (this.circleDiameter - this.stroke) / 2
    },
    circleStrokeWidth () {
      return parseInt(this.stroke) + 1 + 'px'
    },
    circleCircumference () {
      return 2 * Math.PI * this.circleRadius
    },
    circleStrokeDashArray () {
      return this.circleCircumference + 'px'
    },
    circleStrokeDashOffset () {
      return (this.circleCircumference * (100 - this.value)) / 100 + 'px'
    },
    isWorking () {
      return this.$store.state.main.isWorking
    },
    isPlaying () {
      return this.$store.state.main.isPlaying
    },
    toggleIcon () {
      return this.isPlaying ? 'pause' : 'play'
    }
  },
  watch: {
    value () {
      this.attachCircleStyle()
    },
    diameter () {
      this.attachBgStyle()
      this.attachSvgStyle()
      this.attachCircleStyle()
    },
    stroke () {
      this.attachCircleStyle()
    }
  },
  methods: {
    attachSvgStyle () {
      const svg = this.$refs.svg
      const size = `${this.circleDiameter}px`
      svg.style.width = size
      svg.style.height = size
    },
    attachCircleStyle () {
      const circle = this.$refs.circle
      circle.style.strokeDashoffset = this.circleStrokeDashOffset
      circle.style.strokeDasharray = this.circleStrokeDashArray
      circle.style.strokeWidth = this.circleStrokeWidth
      circle.style.setProperty(
        '--md-progress-spinner-start-value',
        0.95 * this.circleCircumference
      )
      circle.style.setProperty(
        '--md-progress-spinner-end-value',
        0.2 * this.circleCircumference
      )
    },
    attachBgStyle () {
      const bg = this.$refs.bg
      const size = `${this.circleDiameter - this.stroke * 2}px`
      bg.style.width = size
      bg.style.height = size
    },
    onClick () {
      this.$store.dispatch(PLAY_OR_STOP)
    }
  },
  mounted () {
    this.attachBgStyle()
    this.attachSvgStyle()
    this.attachCircleStyle()
  }
}
</script>

<template src="./CountdownClock.html"></template>
<style lang="less" src="./CountdownClock.less"></style>
