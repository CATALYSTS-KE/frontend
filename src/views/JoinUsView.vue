<template>
  <div>
    <main>
      <section
        class="pb-10 px-20 bg-[url('@/assets/images/pattern_vector_grey.svg')] bg-cover bg-center relative overflow-hidden"
      >
        <div class="p-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#EE3B26"
            width="371"
            height="116"
            viewBox="0 0 371 116"
            :path="path1"
            text="Support"
            textFill="white"
            class=""
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Loop through organizations -->
          <div
            v-for="index in 8"
            :key="index"
            class="border-2 bg-white border-gray-400 rounded-lg p-4"
          >
            <div class="flex flex-col justify-center">
              <img
                src="@/assets/images/organization.png"
                alt="Organization"
                class="mb-4 rounded-md"
              />
              <h2 class="text-lg font-semibold mb-2">Organization Title</h2>
              <p class="text-gray-600">Organization Tagline</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <RectangleSvg
            fill="#00C4B3"
            width="450"
            height="116"
            viewBox="0 0 614 116"
            :path="path2"
            text="Join As A Donor"
            textFill="white"
            class=""
          />

          <RectangleSvg
            fill="#943700"
            width="450"
            height="116"
            viewBox="0 0 613 116"
            :path="path3"
            text="Join the alliance"
            textFill="white"
            class=""
          />
        </div>
      </section>
      <section class="bg-[#808184] flex justify-center">
        <RectangleSvg
          fill="#CDDE00"
          width="450"
          height="116"
          viewBox="0 0 613 116"
          :path="path3"
          text="Download Photo Frames"
          textFill="black"
          class=""
        />
      </section>
    </main>
  </div>
</template>
<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
const path1 = 'M362.841 11.544V91.974L3.64062 105.074V6.84399L362.841 11.544Z'
const path2 = 'M607.84 12.09V92.51L3.2002 105.61V7.38L607.84 12.09Z'
const path3 = 'M3 100.9V20.48L607.64 7.38V105.61L3 100.9Z'
</script>
