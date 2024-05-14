<template>
  <div class="footer bg-black text-white flex flex-col md:items-center w-full">
    <!-- link to the pages container -->
    <div class="grid grid-cols-2 md:grid-cols-4 text-lg">
      <div class="mb-6 md:mx-20 mx-10">
        <h2>ABOUT US</h2>
        <div class="flex flex-col text-sm tracking-wider">
          <RouterLink to="/">Who we are</RouterLink>
          <RouterLink to="/"> What We Do</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>UPDATES</h2>
        <div class="flex flex-col text-sm tracking-wider">
          <RouterLink to="/">Stories</RouterLink>
          <RouterLink to="/">News/Articles</RouterLink>
          <RouterLink to="/">Events</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>RESOURCES</h2>
        <div class="flex flex-col text-sm tracking-wider">
          <RouterLink to="/">Guidelines</RouterLink>
          <RouterLink to="/">Toolkits</RouterLink>
          <RouterLink to="/">Resources</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>JOIN US</h2>
        <div class="flex flex-col text-sm tracking-wider">
          <RouterLink to="/">Alliance Member</RouterLink>
          <RouterLink to="/">Donor</RouterLink>
          <RouterLink to="/">Corporate</RouterLink>
        </div>
      </div>
    </div>
    <!-- contact info -->
    <div class="py-8 text-lg">
      <span class="text-orange-primary">CONTACTS:</span><span> info@catalystsafrica.org</span>
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
  padding-top: 100px;
  text-align: center;
}

h2 {
  color: #ff5f00;
}
</style>
