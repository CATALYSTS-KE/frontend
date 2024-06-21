<template>
  <div class="relative">
    <div class="">
      <img
        class="w-full h-full"
        alt="contact page dubai image"
        src="@/assets/images/contact/contact_us.jpg"
      />
    </div>
    <div class="absolute top-0 left-0 mt-1 ml-2">
      <img
        class="why-button w-24 h-24 mb-2 cursor-pointer transform translate-y-2"
        alt="why button"
        src="@/assets/images/contact/why_button.jpg"
        @mouseover="showWhyMessage = true"
        @mouseleave="showWhyMessage = false"
        @click="showWhyMessage = !showWhyMessage"
      />
      <div
        v-if="showWhyMessage"
        class="absolute z-10 w-64 p-4 mt-2 text-sm text-white bg-gray-800 rounded shadow-lg"
      >
        By joining CATALYSTS, you (whether individual, organisation, donor) will receive quarterly
        newsletters and opportunities to engage through the CATALYST network. You can share with us
        events, information about your organisation and blogs on your work for sharing with allies.
      </div>
      <img
        class="how-button w-24 h-24 mt-4 cursor-pointer transform translate-y-2"
        alt="how button"
        src="@/assets/images/contact/how_button.jpg"
        @mouseover="showHowMessage = true"
        @mouseleave="showHowMessage = false"
        @click="showHowMessage = !showHowMessage"
      />
      <div
        v-if="showHowMessage"
        class="absolute z-10 w-64 p-4 mt-2 text-sm text-white bg-gray-800 rounded shadow-lg"
      >
        Fill in the contact form and select whether you seek to join us as an Individual,
        Organisation or Donor.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWhyMessage: false,
      showHowMessage: false
    }
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
