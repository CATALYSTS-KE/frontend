<template>
  <svg
    :width="width"
    :height="calculateHeight"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="path" :fill="fill" />
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      :fill="textFill"
      :class="{ uppercase: uppercase }"
      :font-size="calculateFontSize"
    >
      {{ uppercase ? text.toUpperCase() : text }}
    </text>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    textFill: {
      type: String,
      default: '#FFF'
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    viewBox: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true,
      default: 'M362.841 11.544V91.974L3.64062 105.074V6.84399L362.841 11.544Z'
    },
    uppercase: { type: Boolean, default: true }
  },
  computed: {
    calculateFontSize() {
      // Adjust the factor (0.8) as needed to occupy almost the whole width
      return Math.floor(parseFloat(this.width) / this.text.length)
    },
    calculateHeight() {
      // Calculate height based on aspect ratio
      return this.width * (106 / 718)
    }
  }
}
</script>
