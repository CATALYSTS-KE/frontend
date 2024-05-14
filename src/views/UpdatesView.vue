<template>
  <div>
    <img src="@/assets/images/coming_soon.jpg" />
  </div>
  <div class="hidden">
    <!-- News & Articles  -->
    <section class="pb-10 -mt-6 bg-teal-400">
      <!-- Container -->
      <div class="px-20">
        <div class="px-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#FF5F00"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="New & Articles"
            textFill="white"
            class="text"
          />
        </div>
      </div>
    </section>
    <!-- Testimonies  -->
    <section
      class="pb-10 -mt-6 bg-orange-primary bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative overflow-hidden"
    >
      <!-- Container -->
      <div class="px-20">
        <div class="px-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#CDDE00"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="Testimonies"
            textFill="white"
            class="text"
          />
        </div>
        <div class="pl-40 grid grid-cols-2 2xl:grid-cols-4 gap-y-8 2xl:gap-6 pt-12">
          <!-- Loop through frames -->
          <div
            v-for="index in 3"
            :key="index"
            class="w-96 h-60 border-4 bg-white border-gray-400 rounded-lg p-4"
          >
            <div class="px-4">
              <img src="@/assets/images/team_pic.png" alt="Organization" class="mb-4 w-full" />
              <h1>Header One here</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Press Statements  -->
    <section class="section-with-background">
      <!-- Container -->
      <div class="px-20">
        <div class="px-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#943700"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="Press Statements"
            textFill="white"
            class="text"
          />
        </div>
        <div class="mx-6 py-4">
          <!-- Loop through your data -->
          <div
            v-for="(item, index) in cardData"
            :key="index"
            class="bg-white shadow-md rounded-lg h-48 overflow-auto"
          >
            <div class="flex flex-col md:flex-row">
              <!-- Text Content -->
              <div class="p-4">
                <h2 class="text-2xl px-12 text-red-primary">{{ item.title }}</h2>
                <p
                  class="text-lg font-normal leading-snug px-12 py-6 text-justify mt-2 text-gray-600"
                  v-html="item.message"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Upcoming Events  -->
    <section class="pb-10 -mt-6 bg-orange-700 bg-cover bg-center relative overflow-hidden">
      <!-- <section
      class="pb-10 -mt-6 bg-orange-700 bg-[url('@/assets/images/brown_bg.svg')] bg-cover bg-center relative overflow-hidden"
    > -->
      <!-- Container -->
      <div class="px-20">
        <div class="px-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#00C4B3"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="Upcoming Events"
            textFill="white"
            class="text"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
          <!-- Event Card 1 -->
        </div>
      </div>
    </section>
    <!-- Photo Gallery  -->
    <section class="pb-10 -mt-6 bg-red-600 overflow-hidden">
      <!-- Container -->
      <div class="px-20">
        <div class="px-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#F7A800"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="Photo Gallery"
            textFill="white"
            class="text"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'

// const path2 = 'M600.84 4.69995V85.1301L0 98.23V0L600.84 4.69995Z'
const path3 = 'M481.68 4.70001V85.13L0 98.22V0L481.68 4.70001Z'

const cardData = [
  {
    title: 'Overview of Abortion laws by country, In Africa',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
      consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
      sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
      commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
      maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
      aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
      Vel pharetra vel turpis nunc eget.
      <br>`
  },
  {
    title: 'Overview of Abortion laws by country, In Africa',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
      consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
      sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
      commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
      maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
      aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
      Vel pharetra vel turpis nunc eget.
      <br>`
  }
]
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
}
</style>
