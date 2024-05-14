<template>
  <div>
    <main>
      <section
        class="pb-10 px-6 md:px-20 bg-[url('@/assets/images/pattern_vector_grey.svg')] bg-cover bg-center relative overflow-hidden"
      >
        <div class="p-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#EE3B26"
            width="371"
            height="116"
            viewBox="0 0 371 116"
            :path="path1"
            text="ALLIANCE MEMBERS"
            textFill="white"
            class=""
          />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Loop through organizations -->
          <div
            v-for="item in OrganizationData"
            :key="item.title"
            class="border-2 bg-white border-gray-400 rounded-lg p-4"
          >
            <div class="flex flex-col justify-center items-center">
              <!-- Center images vertically and horizontally -->
              <div class="w-full aspect-w-16 aspect-h-9">
                <!-- Aspect ratio container -->
                <img
                  :src="`./public/members/${item.image}`"
                  alt="Organization"
                  class="object-cover rounded-md w-full h-full"
                />
              </div>
              <h2 class="text-lg font-semibold my-2 text-center">{{ item.title }}</h2>
              <p class="text-gray-600">Organization Tagline</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <RouterLink to="/contact-us">
            <RectangleSvg
              fill="#00C4B3"
              width="450"
              height="116"
              viewBox="0 0 614 116"
              :path="path2"
              text="JOIN AS A DONOR"
              textFill="white"
              class=""
            />
          </RouterLink>
          <RouterLink to="/contact-us">
            <RectangleSvg
              fill="#943700"
              width="450"
              height="116"
              viewBox="0 0 613 116"
              :path="path3"
              text="JOIN THE ALLIANCE"
              textFill="white"
              class=""
            />
          </RouterLink>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
const path1 = 'M362.841 11.544V91.974L3.64062 105.074V6.84399L362.841 11.544Z'
const path2 = 'M607.84 12.09V92.51L3.2002 105.61V7.38L607.84 12.09Z'
const path3 = 'M3 100.9V20.48L607.64 7.38V105.61L3 100.9Z'
const OrganizationData = [
  {
    title: 'Figo',
    image: 'figo_logo.png'
  },
  {
    title: 'Center For Reproductive Rights Africa',
    image: 'crr_logo.jpeg'
  },
  {
    title: 'IPAS',
    image: 'IPAS_Logo_RGB_sm.webp'
  },
  {
    title: 'IPPFAR',
    image: 'IPPFAR_logo.jpeg'
  },
  {
    title: 'Population Council',
    image: 'Pop_Council_logo.png'
  }
]
</script>
