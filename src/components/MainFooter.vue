<template>
  <div class="footer bg-black text-white flex flex-col md:items-center w-full">
    <!-- link to the pages container -->
    <div class="grid grid-cols-2 md:grid-cols-4 text-lg md:text-xl text-normal tracking-wide">
      <div class="mb-6 md:mx-20 mx-10">
        <h2>ABOUT US</h2>
        <div class="flex flex-col text-sm md:text-lg tracking-wider font-lighter">
          <RouterLink to="/">Who We Are</RouterLink>
          <RouterLink to="/"> What We Do</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>UPDATES</h2>
        <div class="flex flex-col text-sm md:text-lg tracking-wider">
          <RouterLink to="/">Stories</RouterLink>
          <RouterLink to="/">News/Articles</RouterLink>
          <RouterLink to="/">Events</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>RESOURCES</h2>
        <div class="flex flex-col text-sm md:text-lg tracking-wider">
          <RouterLink to="/">Guidelines</RouterLink>
          <RouterLink to="/">Toolkits</RouterLink>
          <RouterLink to="/">Resources</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>JOIN US</h2>
        <div class="flex flex-col text-sm md:text-lg tracking-wider">
          <RouterLink to="/">Individual</RouterLink>
          <RouterLink to="/">Organization</RouterLink>
          <RouterLink to="/">Donor</RouterLink>
        </div>
      </div>
    </div>
    <!-- contact info -->
    <div class="py-8 text-lg">
      <span class="text-orange-primary">CONTACTS:</span><span> info@catalystsafrica.org</span>
    </div>
    <!-- contact info -->
    <div class="pt-2 pb-10 text-lg md:text-lg">
      <span class="text-white">SECURITY, PRIVACY & TERMS</span>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 0px;
  padding-top: 40px;
  text-align: center;
}

h2 {
  color: #ff5f00;
}
</style>
