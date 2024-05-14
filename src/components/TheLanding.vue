<template>
  <div class="min-h-screen">
    <main>
      <section
        id="mission"
        class="pb-10 md:px-20 bg-brown-primary bg-cover bg-center relative overflow-hidden"
      >
        <div class="">
          <img
            src="@/assets/images/Catalyst.svg"
            alt="Title Image"
            class="block relative px-4 py-2 z-10"
          />
        </div>
        <div class="flex 7xl:justify-center my-8">
          <div class="relative">
            <p
              class="font-inter md:text-6xl font-normal leading-snug px-4 py-2 text-white text-center"
            >
              An Africa-led alliance connecting and amplifying African voices and efforts towards
              universal abortion rights and quality abortion care for all.
            </p>
          </div>
        </div>

        <!-- Home page video container -->
        <div class="">
          <img
            src="@/assets/images/home_video.png"
            alt="Catalyst Video Animation"
            class="w-full md:px-4 py-2"
          />
        </div>
      </section>
      <!-- Who we are -->
      <section
        class="relative pb-10 flex flex-col justify-center bg-[url('@/assets/images/who-we-are-bg.png')] bg-cover bg-center"
      >
        <div class="">
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

        <div class="h-full pt-10 p-4 md:px-20">
          <div
            class="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg h-96 overflow-y-auto relative mx-auto"
          >
            <!-- bg-opacity-50 makes the background slightly transparent -->
            <p class="text-lg font-normal leading-snug px-2 md:px-4 text-justify">
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
            <p class="text-lg font-normal leading-snug px-2 md:px-4 py-2 text-justify">
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
            <p class="text-lg font-normal leading-snug px-2 md:px-4 text-justify">
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
      <!-- <div class="bg-black"> -->
      <div class="bg-[#FF5F00]">
        <section
          class="pb-10 bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative overflow-hidden"
        >
          <div class="">
            <!-- ReusableSvg component -->
            <RectangleSvg
              fill="black"
              width="360"
              height="105"
              viewBox="0 0 360 105"
              :path="path2"
              text="Join Us"
              uppercase="false"
              textFill="white"
              class=""
            />
          </div>

          <div class="h-full px-20">
            <img src="@/assets/images/magaphone.png" />
          </div>
        </section>
      </div>

      <section class="relative pb-10 px-20 bg-brown-primary overflow-hidden">
        <div class="">
          <!-- ReusableSvg component -->
          <div class="div">
            <img
              src="@/assets/images/become_a_catalyst.svg"
              alt="Title Image"
              class="h-auto block relative"
            />
          </div>

          <!-- <RectangleSvg
            fill="#701012"
            width="718"
            height="106"
            viewBox="0 0 718 106"
            :path="path3"
            text="Become a catalyst"
            textFill="white"
            class="hidden md:block"
          /> -->
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
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
                class="bg-blue-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
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
