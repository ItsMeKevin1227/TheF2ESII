<template>
  <svg :class="svgClass" aria-hidden="true" :width="`${iconSize}px`" :height="`${iconSize}px`">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 16
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
