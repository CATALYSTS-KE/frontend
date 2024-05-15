<template>
  <div class="min-h-screen">
    <main>
      <section
        id="mission"
        class="pb-10 md:px-20 bg-brown-primary bg-[url('@/assets/images/pattern_brown.svg')] bg-cover bg-center relative overflow-hidden"
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
              class="text-4xl md:text-6xl font-light leading-snug px-4 py-2 text-white text-center"
            >
              An
              <span class="text-yellow-secondary font-bold"> Africa-led Alliance </span> Connecting
              and Amplifying African Voices and Efforts towards
              <span class="text-yellow-secondary font-bold">
                Universal Abortion Rights and Quality Abortion Care</span
              >
              for all.
            </p>
          </div>
        </div>

        <!-- Home page video container -->
        <!-- <div class="">
          <img
            src="@/assets/images/home_video.png"
            alt="Catalyst Video Animation"
            class="w-full px-4 py-2"
          />
        </div> -->
        <div class="mt-4 px-8">
          <div
            style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden"
            class="px-4"
          >
            <iframe
              class="w-full"
              title="The CATALYSTS Manifesto"
              style="position: absolute; top: 0; left: 0; height: 100%"
              src="https://www.youtube.com/embed/IooUuE711cA?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </section>
      <!-- Who we are -->
      <section
        class="relative px-4 md:px-20 pb-10 flex flex-col justify-center bg-[url('@/assets/images/who-we-are-bg.png')] bg-cover bg-center"
      >
        <div class="">
          <img src="@/assets/images/who-we-are.svg" alt="Title Image" class="block relative z-10" />
        </div>

        <div class="h-full pt-10 py-8 md:py-24">
          <div
            class="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg overflow-y-auto relative mx-auto"
          >
            <!-- bg-opacity-50 makes the background slightly transparent -->
            <p class="text-lg font-normal leading-snug px-2 md:px-4 text-justify">
              We are an African-led alliance, committed to championing quality abortion care across
              the continent by uniting and amplifying African voices.
            </p>
            <p class="text-lg font-normal leading-snug px-2 md:px-4 py-2 text-justify">
              As CATALYSTS, we leverage the strengths of our members to catalyze impactful change in
              abortion care. We champion the protection of reproductive rights, to ensure that every
              individual can access high-quality abortion care without barriers.
            </p>
            <p class="text-lg font-normal leading-snug px-2 md:px-4 text-justify">
              Coming together elevates our capacity to unlock flexible resources and establish
              meaningful partnerships. We are unapologetic and united towards sparking change for
              abortion care across the continent.
            </p>
          </div>
        </div>
      </section>
      <!-- <div class="bg-black"> -->
      <div class="bg-[#FF5F00]">
        <section
          class="px-4 md:px-20 pb-10 bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative overflow-hidden"
        >
          <div class="container">
            <img
              src="@/assets/images/join_us_landing.svg"
              alt="Title Image"
              class="block max-w-full h-auto"
            />
          </div>

          <div class="h-full px-20">
            <img src="@/assets/images/magaphone.png" class="max-w-full h-auto" />
          </div>
        </section>
      </div>

      <section class="relative px-4 md:px-20 pb-10 bg-brown-primary overflow-hidden">
        <div class="">
          <!-- ReusableSvg component -->
          <div class="div">
            <img
              src="@/assets/images/become_a_catalyst.svg"
              alt="Title Image"
              class="h-auto block relative"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
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

        <div class="py-20"></div>
      </section>
    </main>
  </div>
</template>
<script setup>
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/vue';
//   // Import Swiper styles
//   import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar'
// import RectangleSvg from '@/components/common/RectangleSvg.vue'
// const path1 = 'M483.92 14.01V101.44L5.14008 112.86V7.63013L483.92 14.01Z'
// const path2 = 'M359.86 13.4299V100.86L0 105.22V0L359.86 13.4299Z'
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
