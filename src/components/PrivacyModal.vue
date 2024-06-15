<template>
  <div class="relative">
    <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white max-w-4xl border-t rounded-lg shadow-lg w-full z-100">
        <div class="flex justify-between items-center p-4 border-b border-gray-200">
          <!-- Close button -->
          <button @click="closeModal" class="text-gray-500 hover:text-gray-800 text-3xl">
            &times;
          </button>

          <!-- Title and "I agree" button -->
          <div class="text-lg font-semibold">Privacy Policy</div>
          <button
            @click="closeModal"
            class="border border-blue-primary px-2 py-1 rounded bg-blue-primary hover:bg-blue-800 font-medium tracking-wide text-white ml-auto"
          >
            I agree to the policy
          </button>
        </div>

        <!-- PDF viewer -->
        <div class="h-96">
          <vue-pdf-embed
            class="h-full overflow-y-scroll"
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

            <div class="text-black">{{ page }} / {{ pageCount }}</div>

            <button
              :disabled="page >= pageCount"
              @click="page++"
              class="border border-gray-300 px-3 py-1 rounded-md ml-2 hover:bg-gray-200"
            >
              <span class="text-black">❯</span>
            </button>
          </div>

          <label class="ml-auto text-black">
            <input v-model="showAllPages" type="checkbox" class="mr-2" />
            Show all pages
          </label>
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
  'https://res.cloudinary.com/djgy5qzmy/image/upload/v1718449474/private_policy_gllr2g.pdf'

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
