<template>
  <div class="min-h-screen">
    <section class="section-with-background min-h-screen">
      <!-- Container -->
      <div class="px-4 md:px-10 lg:px-20 xl:px-32">
        <div class="md:pb-20 pb-10">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#EE3B26"
            :width="getWidth()"
            :height="getHeight()"
            viewBox="0 0 482 100"
            :path="path3"
            text="RESEARCH"
            textFill="white"
            class="font-bold hidden md:block"
          />
          <img
            src="@/assets/images/research_title_sm.svg"
            alt="Research"
            class="block md:hidden relative px-4 z-10"
          />
        </div>
        <div class="p-4 md:p-8 lg:p-14 md:h-[700px] bg-white shadow-md rounded-lg overflow-auto">
          <!-- Loop through your data -->
          <div v-for="index in 4" :key="index" class="pb-8">
            <div class="flex flex-col md:flex-row">
              <!-- Text Content -->
              <div class="p-4 md:pb-0">
                <h2 class="text-2xl px-4 md:px-12 text-red-primary font-bold">
                  {{ cardData.title }}
                </h2>
                <p
                  class="text-lg font-normal leading-snug px-4 md:px-12 py-6 text-justify mt-2 text-gray-600"
                  v-html="cardData.message"
                ></p>
                <!-- Download and Share Buttons -->
                <div class="flex items-center justify-between px-4 md:px-14">
                  <!-- Download Button -->
                  <button
                    class="bg-blue-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="downloadPDF(cardData)"
                  >
                    DOWNLOAD
                  </button>
                  <!-- Share Button -->
                  <button
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    @click="shareItem(cardData)"
                  >
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
import { jsPDF } from 'jspdf'
// const path1="M213.32 7.63564H213.14C212.971 7.57991 212.797 7.54304 212.62 7.52565C212.478 7.54173 212.338 7.56843 212.2 7.60561L3.37 0.88564L3.29999 0.945638C3.21111 0.92088 3.121 0.900854 3.03 0.88564C2.69907 0.884324 2.37112 0.948201 2.06488 1.07363C1.75864 1.19906 1.48008 1.38358 1.24515 1.61666C1.01021 1.84973 0.823502 2.12679 0.695648 2.43203C0.567794 2.73727 0.501311 3.06472 0.5 3.39565V59.4756C0.501311 59.8065 0.567794 60.134 0.695648 60.4392C0.823502 60.7445 1.01021 61.0215 1.24515 61.2546C1.48008 61.4877 1.75864 61.6722 2.06488 61.7976C2.37112 61.9231 2.69907 61.9869 3.03 61.9856L212.62 54.7456C212.952 54.7469 213.281 54.6827 213.587 54.5567C213.894 54.4306 214.173 54.2452 214.408 54.0111C214.643 53.7769 214.83 53.4987 214.957 53.1923C215.084 52.8859 215.15 52.5574 215.15 52.2256V9.99563C215.146 9.46033 214.969 8.94073 214.644 8.5151C214.319 8.08946 213.865 7.78083 213.35 7.63564"
const path3 = 'M482 5.61966V86.0497L0.330078 99.1497V0.919678L482 5.61966Z'

const cardData = {
  title: 'Overview of Abortion laws by country, In Africa',
  message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
      consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
      sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
      commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
      maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
      aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
      Vel pharetra vel turpis nunc eget.`
}

const downloadPDF = (item) => {
  // Create a new jsPDF instance
  let doc = new jsPDF()

  // Add title and message to the PDF
  doc.text(item.title, 10, 10)
  doc.text(item.message, 10, 20)

  // Save the PDF
  doc.save(`${item.title}.pdf`)
}

const shareItem = (item) => {
  // Replace this with your logic to share the item on social media platforms
  // For example, you can open a share dialog or navigate to a share URL
  // This is just a placeholder
  console.log(item)
  const url = window.location.href // Get the current URL
  alert(`Share this URL: ${url}`)
}
const getWidth = () => {
  // Adjust width based on viewport size
  return window.innerWidth < 768 ? '100%' : 482 // Example breakpoint is 768px
}
const getHeight = () => {
  // Adjust height based on viewport size
  return window.innerWidth < 768 ? 'auto' : 100 // Example breakpoint is 768px
}
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(195,217,60,1)] bg-[url('@/assets/images/pattern_green.png')] bg-cover bg-center py-12;
}

::-webkit-scrollbar {
  width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(77, 72, 72);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ee3b26;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>
