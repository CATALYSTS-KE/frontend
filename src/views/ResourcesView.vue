<template>
  <div class="min-h-screen">
    <section class="section-with-background min-h-screen">
      <!-- <div class="w-full h-full">
        <img src="@/assets/images/coming_soon.webp" alt="Coming Soon" class="w-full h-full" />
      </div> -->
      <!-- Container -->
      <!-- <div class="px-4 md:px-10 lg:px-20 xl:px-32">
        <div class="md:pb-14 pb-10 w-full h-full">
          <img
            src="@/assets/images/research_title.svg"
            alt="Research"
            class="md:block hidden relative"
          />
          <img
            src="@/assets/images/research_title_sm.svg"
            alt="Research"
            class="block md:hidden relative px-4 z-10"
          />
        </div>
        <div class="p-4 md:p-8 lg:p-14 md:h-[700px] bg-white shadow-md rounded-lg overflow-auto">
          <div v-for="index in 4" :key="index" class="pb-8">
            <div class="flex flex-col md:flex-row">
              <div class="p-4 md:pb-0">
                <h2 class="text-2xl px-4 md:px-12 text-red-primary font-bold">
                  {{ cardData.title }}
                </h2>
                <p
                  class="text-lg font-normal leading-snug px-4 md:px-12 py-6 text-justify mt-2 text-gray-600"
                  v-html="cardData.message"
                ></p>

                <div class="flex items-center justify-between px-4 md:px-14">
                  <button
                    class="bg-blue-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="downloadPDF(cardData)"
                  >
                    DOWNLOAD
                  </button>

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
      </div> -->
    </section>
  </div>
</template>

<script setup>
// import { jsPDF } from 'jspdf'

// const cardData = {
//   title: 'Overview of Abortion laws by country, In Africa',
//   message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//       incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
//       consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
//       sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
//       commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
//       maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
//       aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
//       Vel pharetra vel turpis nunc eget.`
// }

// const downloadPDF = (item) => {
//   // Create a new jsPDF instance
//   let doc = new jsPDF()

//   // Add title and message to the PDF
//   doc.text(item.title, 10, 10)
//   doc.text(item.message, 10, 20)

//   // Save the PDF
//   doc.save(`${item.title}.pdf`)
// }

// const shareItem = (item) => {
// Replace this with your logic to share the item on social media platforms
// For example, you can open a share dialog or navigate to a share URL
// This is just a placeholder
//   const url = window.location.href // Get the current URL
//   alert(`Share this URL: ${url}`)
// }
// // const getWidth = () => {
//   // Adjust width based on viewport size
//   return window.innerWidth < 768 ? '100%' : 482 // Example breakpoint is 768px
// }
// const getHeight = () => {
//   // Adjust height based on viewport size
//   return window.innerWidth < 768 ? 'auto' : 100 // Example breakpoint is 768px
// }
</script>

<style scoped>
/* .section-with-background {
  @apply relative bg-[rgba(195,217,60,1)] bg-[url('@/assets/images/pattern_green.png')] bg-cover bg-center py-12;
} */
.section-with-background {
  @apply relative bg-[rgba(195,217,60,1)] bg-[url('@/assets/images/coming_soon.webp')] bg-cover bg-center;
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
