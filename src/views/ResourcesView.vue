<template>
  <div class="">
    <section class="section-with-background">
      <!-- Container -->
      <div class="px-20">
        <div class="p-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#EE3B26"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="Research"
            textFill="white"
            class=""
          />
        </div>
        <div class="mx-6 py-12">
          <!-- Loop through your data -->
          <div v-for="(item, index) in cardData" :key="index" class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
              <!-- Text Content -->
              <div class="p-4">
                <h2 class="text-2xl px-12 text-red-primary">{{ item.title }}</h2>
                <p class="text-lg font-normal leading-snug px-12 py-6 text-justify mt-2 text-gray-600" v-html="item.message"></p>
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

const path2 = 'M600.84 4.69995V85.1301L0 98.23V0L600.84 4.69995Z'
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
  }
];
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
}

</style>
