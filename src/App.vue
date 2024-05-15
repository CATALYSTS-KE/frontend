<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template class="">
  <div class="md:px-4 mx-auto min-h-screen flex flex-col relative">
    <!-- <header class="flex items-center justify-between px-24 h-56"> -->
    <MainHeader />
    <RouterView class="wrapper relative" />
    <div class="">
      <MainFooter />
    </div>
  </div>
</template>

<style scopped>
.wrapper {
  min-height: calc(100vh - 100px); /* minus header and footer width 
      together*/
  /* min-width: 100%; */
}
* {
  margin: 0;
}
html,
body {
  height: 100%;
  font-family: 'Roboto';
}
</style>
