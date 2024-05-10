<template>
  <nav class="flex justify-center items-center gap-x-6">
    <div
      v-for="(page, index) in pages"
      :key="index"
      class="relative flex items-center justify-center"
    >
      <router-link :to="page.route" class="text-lg"
        ><span class="uppercase">{{ page.label }}</span></router-link
      >
      <img
        @click="toggleSubMenu(index)"
        class="arrow-icon ml-4 cursor-pointer w-4 h-6 justify-self-end"
        src="@/assets/images/arrow.svg"
        alt="Arrow Icon"
      />
      <div
        v-if="activeSubMenuIndex === index"
        class="absolute left-1/2 mt-20 w-40 bg-white shadow-xl border border-[#FF5F00]"
      >
        <!-- Your sub-menu content goes here -->
        <div class="px-4 divider-b">Sub-menu1</div>
        <div class="px-4">Sub-menu2</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
    toggleSubMenu(index) {
      this.activeSubMenuIndex = this.activeSubMenuIndex === index ? null : index
    }
  }
}
</script>
