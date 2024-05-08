<template>
  <nav>
    <div v-for="(page, index) in pages" :key="index">
      <router-link :to="page.route"
        ><span>{{ page.label }}</span></router-link
      >
      <img
        @click="toggleSubMenu(index)"
        class="arrow-icon"
        src="@/assets/images/arrow.svg"
        alt="Arrow Icon"
      />
      <div v-if="activeSubMenuIndex === index" class="sub-menu">
        <slot :name="`submenu-${index}`"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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

<style scoped>
.arrow-icon {
  cursor: pointer;
}

.sub-menu {
  /* Add styles for your sub-menu */
}
</style>
