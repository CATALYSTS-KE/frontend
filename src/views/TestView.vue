<template>
  <div class="container relative bg-[#FFDD00] min-w-full p-8 text-7xl">
    <div class="bg-image absolute inset-0"></div>
    <div class="absolute bottom-8 left-8">Bottom Left</div>
    <div class="absolute top-8 left-8">Top Left</div>
    <div class="absolute top-8 right-8">Top Right</div>
    <div class="absolute bottom-8 right-8">Bottom Right</div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Centered
    </div>
  </div>
</template>

<style scoped>
/* Container holding the text */
.container {
  height: 100vh; /* Full height of the viewport */
  width: 100vw; /* Full width of the viewport */
}
.bg-image {
  background: transparent;
}
/* Background image */
.bg-image {
  background-image: url('@/assets/images/pattern_vector.svg');
  background-size: cover;
  background-position: center;
  width: 100%; /* Ensure the background image covers the entire width */
  height: 100%; /* Ensure the background image covers the entire height */
  min-width: 100vw;
}
</style>
