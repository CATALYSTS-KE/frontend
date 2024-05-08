<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template class="">
  <div class="pt-4 px-24 mx-auto">
    <header class="flex items-center justify-between px-24 h-56">
      <router-link to="/" class="text-lg">
        <img alt="Catalysts logo" class="logo" src="@/assets/images/catalysts-logo.svg" />
      </router-link>

      <div class="wrapper">
        <MainHeader />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
