<template>
  <div class="footer text-white flex flex-col items-center p-10 bg-[url('@/assets/images/footer_bg.svg')]">
    <!-- link to the pages container -->
    <div class="flex px-4">
      <div>
        <h1>ABOUT US</h1>
        <div class="flex flex-col">
          <RouterLink to="/">Who we are</RouterLink>
          <RouterLink to="/"> What We Do</RouterLink>
        </div>
      </div>
      <div class="">
        <h1>UPDATES</h1>
        <div class="flex flex-col px-4">
          <RouterLink to="/">Stories</RouterLink>
          <RouterLink to="/">News/Articles</RouterLink>
          <RouterLink to="/">Events</RouterLink>
        </div>
      </div>
      <div>
        <h1>RESOURCES</h1>
        <div class="flex flex-col px-4">
          <RouterLink to="/">Guidelines</RouterLink>
          <RouterLink to="/">Toolkits</RouterLink>
          <RouterLink to="/">Resources</RouterLink>
        </div>
      </div>
      <div>
        <h1>JOIN US</h1>
        <div class="flex flex-col px-4">
          <RouterLink to="/">Alliance Member</RouterLink>
          <RouterLink to="/">Donor</RouterLink>
          <RouterLink to="/">Corporate</RouterLink>
        </div>
      </div>
    </div>
    <!-- contact info -->
    <div class="p-4"><span>CONTACTS:</span><span> www.catalystsafrica.org</span></div>
    <!-- socials -->
    <div>
      <div class="flex gap-4">
        <p>FOLLOW US</p>
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
  background-repeat: no-repeat;
  margin-top: 0px ;
  padding-top: 100px;
  height: 300px; /* Adjust the height as needed to display the image */
  text-align: center;
}

h1 {
  color: orange;
}
</style> 
