<template class="relative h-full max">
  <div v-if="show" class="modal fixed top-0 inset-0 flex items-center z-50 justify-center">
    <div class="absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div class="bg-white min-w-full mx-auto rounded shadow-lg z-50">
      <div class="py-1 text-left px-8">
        <!-- loader -->
        <div class="flex justify-end items-center pt-2">
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-800 text-3xl font-extrabold"
          >
            &times;
          </button>
        </div>

        <div class="border flex flex-col p-5 h-full min-w-md">
          <!-- PDF viewer -->
          <div class="h-96 w-full">
            <vue-pdf-embed
              class="h-full min-w-md w-full overflow-y-scroll"
              ref="pdfRef"
              :source="pdfSource"
              :page="page"
              @rendered="handleDocumentRender"
            />
          </div>

          <!-- Pagination and show all pages toggle -->
          <div class="flex justify-between items-center p-4 border-t border-gray-200">
            <div v-if="showAllPages" class="text-gray-500">{{ pageCount }} page(s)</div>
            <div v-else class="flex items-center">
              <button
                :disabled="page <= 1"
                @click="page--"
                class="border border-gray-300 px-3 py-1 rounded-md mr-2 hover:bg-gray-200"
              >
                <span class="text-black">❮</span>
              </button>

              <div class="text-black text-lg font-bold">{{ page }} / {{ pageCount }}</div>

              <button
                :disabled="page >= pageCount"
                @click="page++"
                class="border border-gray-300 px-3 py-1 rounded-md ml-2 hover:bg-gray-200"
              >
                <span class="text-black">❯</span>
              </button>
            </div>
            <div class="mx-auto mt-2">
              <button
                @click="closeModal"
                class="border border-blue-primary px-2 py-1 rounded bg-blue-primary hover:bg-blue-800 font-medium tracking-wide text-white"
              >
                I understand and Agree
              </button>
            </div>
            <label class="text-black text-lg font-bold">
              <input v-model="showAllPages" type="checkbox" class="mr-2" />
              Show all pages
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
import { defineEmits, ref } from 'vue'
const { show } = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})
// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
const pdfSource =
  'https://res.cloudinary.com/djgy5qzmy/image/upload/v1718720200/privacy_policy_x5ou0l.pdf'

const page = ref(1)
const pageCount = ref(1)
const isLoading = ref(true)
const pdfRef = ref(null)
const emit = defineEmits(['close'])

const handleDocumentRender = () => {
  isLoading.value = false
  pageCount.value = pdfRef.value.pageCount
}

const closeModal = () => {
  emit('close')
}
</script>
<style scoped>
.vue-pdf-embed > div {
  overflow-y: scroll;
  background: rgb(243, 244, 246);
  max-height: 60vh; /* Adjust as needed */
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}
</style>
