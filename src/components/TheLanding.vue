<template>
  <div class="min-h-screen">
    <main>
      <section
        id="mission"
        class="pb-10 px-20 bg-[#943700] bg-cover bg-center relative overflow-hidden"
      >
        <div class="max-w-4xl mx-auto">
          <img
            src="@/assets/images/Bold_Unapologetic_Africaled.png"
            alt="Title Image"
            class="block relative px-4 py-2 z-10"
          />
        </div>
        <!-- <div class="">
          <img
            src="@/assets/images/Bold_Unapologetic_Africaled.png"
            alt="Title Image"
            class="block relative px-4 py-2 z-10"
          />
        </div> -->
        <div class="flex justify-center my-8">
          <div class="relative bg-white shadow-md rounded-md p-8 max-w-2xl">
            <p class="font-inter text-xl font-normal leading-snug px-4 py-2 text-justify">
              <span class="font-bold text-red-500">CATALYSTS:</span> a bold, unapologetic Africa-led
              alliance connecting and amplifying Africans to achieve universal abortion rights and
              access to high quality abortion care for all.
            </p>
          </div>
        </div>

        <!-- Home page video container -->
        <div class="max-w-5xl mx-auto">
          <img
            src="@/assets/images/home_video.png"
            alt="Catalyst Video Animation"
            class="w-full px-4 py-2"
          />
        </div>
      </section>
      <!-- Who we are -->
      <section
        class="pb-10 px-20 bg-[url('@/assets/images/who-we-are-bg.png')] bg-cover bg-center relative"
      >
        <div class="p-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#00C4B3"
            width="493"
            height="123"
            viewBox="0 0 493 123"
            :path="path1"
            text="WHO WE ARE"
            textFill="white"
            class=""
          />
        </div>

        <div class="h-full p-4">
          <div
            class="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-8/12 h-96 overflow-y-auto relative"
          >
            <!-- bg-opacity-50 makes the background slightly transparent -->
            <p class="text-lg font-normal leading-snug px-4 py-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
              consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
              sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
              commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p class="text-lg font-normal leading-snug px-4 py-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
              consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
              sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
              commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p class="text-lg font-normal leading-snug px-4 py-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
              consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
              sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
              commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <div class="bg-black">
        <!-- <div class="bg-[#FF5F00]"> -->
        <section
          class="pb-10 px-20 bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative overflow-hidden"
        >
          <div class="p-4">
            <!-- ReusableSvg component -->
            <RectangleSvg
              fill="black"
              width="360"
              height="105"
              viewBox="0 0 360 105"
              :path="path2"
              text="JOIN US"
              textFill="white"
              class=""
            />
          </div>

          <div class="h-full">
            <img src="@/assets/images/magaphone.png" />
          </div>
        </section>
      </div>

      <section
        class="pb-10 px-20 bg-[url('@/assets/images/pattern_vector_grey.svg')] bg-cover bg-center relative overflow-hidden"
      >
        <div class="p-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#701012"
            width="718"
            height="106"
            viewBox="0 0 718 106"
            :path="path3"
            text="Become a catalyst"
            textFill="white"
            class=""
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Loop through frames -->
          <div
            v-for="index in 4"
            :key="index"
            class="border-2 bg-white border-gray-400 rounded-lg p-4"
          >
            <div class="flex flex-col justify-center items-center">
              <img
                src="@/assets/images/socials_frames.png"
                alt="Organization"
                class="mb-4 rounded-md"
              />
              <h2 class="text-lg font-semibold mb-2">
                Social Media Frame
                <span class="border rounded-full p-2 border-yellow-400">0{{ index }}</span>
              </h2>
              <a
                :href="`@/assets/images/socials_frames.png`"
                download="socials_frames.png"
                class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
const path1 = 'M483.92 14.01V101.44L5.14008 112.86V7.63013L483.92 14.01Z'
const path2 = 'M359.86 13.4299V100.86L0 105.22V0L359.86 13.4299Z'
const path3 = 'M717.75 6.37988V93.8003L0 105.23V0L717.75 6.37988Z'
</script>
<style scoped>
/* width */
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
