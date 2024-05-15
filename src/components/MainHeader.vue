<template>
  <header class="px-8 flex justify-between items-center">
    <router-link to="/" class="" @click="resetActiveTab()">
      <img alt="Catalysts logo" class="logo mr-20" src="@/assets/images/catalysts-logo.svg" />
    </router-link>

    <!-- Mobile Menu Button -->
    <!-- <button class="block md:hidden" @click="toggleMobileMenu">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button> -->

    <!-- Mobile Vavigation -->
    <div class="md:hidden mx-auto flex w-full justify-end">
      <div class="group relative cursor-pointer py-2">
        <div class="flex items-end justify-between bg-white pl-12">
          <svg
            class="w-11 h-11"
            fill="none"
            stroke="#FF5F00"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        <div
          class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-3 text-gray-800 shadow-xl group-hover:visible"
        >
          <div v-for="(page, index) in pages" :key="index" class="py-2">
            <router-link
              @click="toggleMobileMenu"
              :to="page.route"
              class="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-orange-primary md:mx-2"
              :class="{ 'text-orange-primary': activeTabIndex === index }"
            >
              {{ page.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex justify-end items-center md:space-x-4">
      <div v-for="(page, index) in pages" :key="index" class="relative flex items-center">
        <router-link
          @click="setActiveTab(index)"
          :to="page.route"
          class="text-2xs md:text-base flex justify-between page-link"
          :class="{
            'text-orange-primary': activeTabIndex === index
          }"
        >
          <span
            class="capitalize md:uppercase"
            :class="{
              'border-b border-orange-primary': activeTabIndex === index
            }"
            >{{ page.label }}</span
          >
          <img
            @click="toggleSubMenu(index)"
            class="arrow-icon cursor-pointer w-5 h-6 md:ml-2 md:pt-1"
            src="@/assets/images/arrow.svg"
            alt="Arrow Icon"
          />
        </router-link>
        <div
          v-if="activeSubMenuIndex === index"
          class="absolute left-1/2 mt-20 w-40 bg-white shadow-xl"
        >
          <!-- <div
          v-if="activeSubMenuIndex === index"
          class="absolute left-1/2 mt-20 w-40 bg-white shadow-xl border border-orange-primary"
        > -->
          <!-- Your sub-menu content goes here -->
          <!-- <div class="px-4 divider-b">Sub-menu1</div>
          <div class="px-4">Sub-menu2</div> -->
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <!-- <nav class="md:hidden" v-show="showMobileMenu">
      <div v-for="(page, index) in pages" :key="index" class="py-2">
        <router-link
          @click="toggleMobileMenu"
          :to="page.route"
          class="block text-center text-xs md:text-base"
          :class="{ 'text-orange-primary': activeTabIndex === index }"
        >
          {{ page.label }}
        </router-link>
      </div>
    </nav> -->
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeTabIndex: null,
      activeSubMenuIndex: null,
      showMobileMenu: false,
      pages: [
        { label: 'Who We Are', route: '/who-we-are' },
        { label: 'What We Do', route: '/what-we-do' },
        { label: 'Updates', route: '/updates' },
        { label: 'Resources', route: '/resources' },
        { label: 'Join Us', route: '/join-us' },
        { label: 'Contact Us', route: '/contact-us' }
      ]
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
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<style scoped>
/* Add margin-right to the logo to create spacing between logo and navigation */
</style>
