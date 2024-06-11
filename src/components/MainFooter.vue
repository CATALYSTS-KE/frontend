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
          <RouterLink to="/updates">Stories</RouterLink>
          <RouterLink to="/updates">News/Articles</RouterLink>
          <RouterLink to="/updates">Events</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>RESOURCES</h2>
        <div class="flex flex-col text-sm md:text-lg tracking-wider">
          <RouterLink to="/resources">Guidelines</RouterLink>
          <RouterLink to="/resources">Toolkits</RouterLink>
          <RouterLink to="/resources">Resources</RouterLink>
        </div>
      </div>
      <div class="mb-6">
        <h2>JOIN US</h2>
        <div class="flex flex-col text-sm md:text-lg tracking-wider">
          <RouterLink to="/join-us">Individual</RouterLink>
          <RouterLink to="/join-us">Organization</RouterLink>
          <RouterLink to="/join-us">Donor</RouterLink>
        </div>
      </div>
    </div>

    <div
      class="mx-auto flex md:grid grid-cols-2 md:grid-cols-4 justify-around px-4 md:px-1 md:justify-between text-sm md:text-xl text-normal tracking-wide items-center"
    >
      <router-link
        to="/"
        data-active="true"
        class="motion-safe:active:-translate-y-0.5 motion-safe:"
        @click="resetActiveTab()"
      >
        <img alt="Catalysts logo" class="logo" src="@/assets/images/catalysts-logo.svg" />
      </router-link>
      <div class=""></div>
      <div class="md:col-span-2 items-center">
        <div>
          <div class="text-sm md:text-lg">
            <span class="text-orange-primary">CONTACTS:</span
            ><span class=""> info@catalystsafrica.org</span>
          </div>
          <!-- privacy policy link -->
          <div class="text-sm md:text-lg">
            <span @click="showPdfModal = true" class="text-white cursor-pointer underline"
              >Privacy Policy</span
            >
          </div>
        </div>
      </div>
    </div>
    <PrivacyModal :show="showPdfModal" @close="showPdfModal = false" />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import PrivacyModal from '@/components/PrivacyModal.vue'
const showPdfModal = ref(false)
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
