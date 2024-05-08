<template>
  <div>
    <!-- link to the pages container -->
    <div>
      <div>
        <h1>ABOUT US</h1>
        <RouterLink to="/">Who we are</RouterLink>
        <RouterLink to="/"> What We Do</RouterLink>
      </div>
      <div>
        <h1>UPDATES</h1>
        <RouterLink to="/">Stories</RouterLink>
        <RouterLink to="/">News/Articles</RouterLink>
        <RouterLink to="/">Testimonies</RouterLink>
        <RouterLink to="/">Events</RouterLink>
      </div>
      <div>
        <h1>RESOURCES</h1>
        <RouterLink to="/">Research</RouterLink>
        <RouterLink to="/">Resources</RouterLink>
      </div>
      <div>
        <h1>JOIN US</h1>
        <RouterLink to="/">Donor</RouterLink>
        <RouterLink to="/">Alliance Member</RouterLink>
        <RouterLink to="/">Crorporate</RouterLink>
      </div>
    </div>
    <!-- contact info -->
    <div><span>CONTACTS:</span><span>: www.catalystsafrica.org</span></div>
    <!-- socials -->
    <div>
        <div>
            <p>FOLLOW US</p>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
            <div>LinkedIn</div>
            <div>Yotube</div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
