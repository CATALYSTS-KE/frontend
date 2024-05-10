<template>
  <div class="footer bg-[url('@/assets/images/footer_bg.svg')]  text-white flex flex-col items-center w-full">
    <!-- link to the pages container -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 text-2xl">
      <div class="mb-6 mx-20">
        <h1>ABOUT US</h1>
        <div class="flex flex-col">
          <RouterLink to="/">Who we are</RouterLink>
          <RouterLink to="/"> What We Do</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h1>UPDATES</h1>
        <div class="flex flex-col">
          <RouterLink to="/">Stories</RouterLink>
          <RouterLink to="/">News/Articles</RouterLink>
          <RouterLink to="/">Events</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h1>RESOURCES</h1>
        <div class="flex flex-col">
          <RouterLink to="/">Guidelines</RouterLink>
          <RouterLink to="/">Toolkits</RouterLink>
          <RouterLink to="/">Resources</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h1>JOIN US</h1>
        <div class="flex flex-col">
          <RouterLink to="/">Alliance Member</RouterLink>
          <RouterLink to="/">Donor</RouterLink>
          <RouterLink to="/">Corporate</RouterLink>
        </div>
      </div>
    </div>
    <!-- contact info -->
    <div class="pt-8 text-2xl">
      <span class="text-yellow-600">CONTACTS:</span><span> www.catalystsafrica.org</span></div>
    <!-- socials -->
    <div class="p-12 flex justify-center text-2xl ">
      <div class="flex gap-4">
        <h1>FOLLOW US</h1>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Instagram</div>
        <div>LinkedIn</div>
        <div>YouTube</div> <!-- Corrected typo -->
      </div>
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
  margin-top: 0px ;
  padding-top: 100px;
  text-align: center;
}

h1 {
  color: orange;
}
</style> 
