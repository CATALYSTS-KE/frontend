<template>
  <header class="px-8 flex justify-between items-center">
    <router-link to="/" class="" @click="resetActiveTab()">
      <img alt="Catalysts logo" class="logo" src="@/assets/images/catalysts-logo.svg" />
    </router-link>

    <nav class="flex justify-end items-center gap-x-6">
      <div v-for="(page, index) in pages" :key="index" class="relative flex items-center">
        <router-link
          @click="setActiveTab(index)"
          :to="page.route"
          class="text-xs md:text-base flex justify-between page-link"
          :class="{ 'text-orange-primary': activeTabIndex === index }"
        >
          <span class="md:uppercase">{{ page.label }}</span>
          <img
            @click="toggleSubMenu(index)"
            class="arrow-icon cursor-pointer w-4 h-6 ml-4 pt-2"
            src="@/assets/images/arrow.svg"
            alt="Arrow Icon"
          />
        </router-link>
        <div
          v-if="activeSubMenuIndex === index"
          class="absolute left-1/2 mt-20 w-40 bg-white shadow-xl border border-orange-primary"
        >
          <!-- Your sub-menu content goes here -->
          <div class="px-4 divider-b">Sub-menu1</div>
          <div class="px-4">Sub-menu2</div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // isActiveTab: false,
      activeTabIndex: null,

      pages: [
        { label: 'Who We Are', route: '/who-we-are' },
        { label: 'What We Do', route: '/what-we-do' },
        { label: 'Updates', route: '/updates' },
        { label: 'Resources', route: '/resources' },
        { label: 'Join Us', route: '/join-us' },
        { label: 'Contact Us', route: '/contact-us' }
      ],
      activeSubMenuIndex: null
    }
  },

  methods: {
    setActiveTab(index) {
      this.activeTabIndex = index
    },
    resetActiveTab() {
      this.activeTabIndex = null
    },
    toggleSubMenu(index) {
      this.activeSubMenuIndex = this.activeSubMenuIndex === index ? null : index
    }
  }
}
</script>
<style scoped>
/* Add margin-right to the logo to create spacing between logo and navigation */
.logo {
  margin-right: 20px; /* Adjust the value as needed */
}
</style>
