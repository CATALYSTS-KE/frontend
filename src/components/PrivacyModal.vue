<!-- PdfModal.vue -->
<!-- <template>
  <div
    v-if="show"
    class="fixed  bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-3xl">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold">Privacy Policy</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">&times;</button>
        <vue-pdf-embed :source="pdfSource" @rendered="handleDocumentRender" class="mt-4" />
      </div>
    </div>
  </div>
</template> -->
<template class="relative h-full max">
  <div v-if="show" class="modal fixed inset-0 flex items-center z-50 justify-center">
    <div class="absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div class="bg-white min-w-min mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="py-1 text-left px-8">
        <!-- loader -->
        <div class="flex justify-end items-center">
          <button @click="closeModal" class="text-gray-500 hover:text-gray-800 text-3xl">
            &times;
          </button>
        </div>

        <div class="border flex flex-col p-5 h-full overflow-y-scroll">
          <div class="pb-2">
            <p class="privacy-headings text-black font-bold pb-2">Privacy Policy</p>
            <p class="text-black">
              This Privacy Policy outlines how CATALYSTS ("we," "us," "our") collects, uses, and
              protects personal information gathered through our website (the "Site"). By using the
              Site, you agree to this Privacy Policy. If you do not agree, please refrain from using
              the Site.
            </p>
          </div>
          <div class="pb-2">
            <p class="privacy-headings text-black font-bold pb-2">Information Collection</p>
            <p class="text-black">
              We collect personal information that you voluntarily provide when using the Site,
              including your name, email address, postal address, phone number, and payment
              information. Additional information collected includes your device and browser type,
              browsing history, and interaction with our website.
            </p>
          </div>
          <div class="text-black">
            <p class="privacy-headings text-black font-bold pb-2">Use of Personal Information</p>
            <p>We use your personal information for various purposes, including:</p>
          </div>

          <div class="mx-auto mt-4">
            <button
              @click="closeModal"
              class="border border-blue-primary px-2 py-1 rounded bg-blue-primary hover:bg-blue-800 font-medium tracking-wide text-white"
            >
              I understand and Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
// import VuePdfEmbed from 'vue-pdf-embed'

const { show } = defineProps({
  show: {
    type: Boolean,
    required: true
  }
  //   pdfSource: {
  //     type: String,
  //     required: true
  //   }
})

// const loading = ref(true)
// const pageCount = ref(1)
// const pdfRef = ref(null)
// const page = 1
const emit = defineEmits(['close'])
// const handleDocumentRender = () => {
//   //   loading.value = false
//   pageCount.value = pdfRef.value.pageCount
// }

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.vue-pdf-embed > div {
  overflow-y: scroll;
  height: 100vh;
  background: rgb(243, 244, 246);
}
.vue-pdf-embed canvas {
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}
</style>
