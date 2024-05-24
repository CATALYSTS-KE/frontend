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
  font-family: 'Roboto', sans-serif;
}

::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(77, 72, 72);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ee3b26;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>
