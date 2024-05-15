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
            class="hidden md:block relative px-4 py-2 z-10"
          />
          <img
            src="@/assets/images/Catalyst_sm.svg"
            alt="Title Image"
            class="block md:hidden relative px-4 py-2 z-10"
          />
        </div>
        <div class="flex 7xl:justify-center my-8">
          <div class="relative">
            <p
              class="text-4xl md:text-6xl font-light leading-snug px-4 py-2 text-white text-center"
            >
              An
              <span class="text-yellow-secondary font-bold"> Africa-Led Alliance </span> Connecting
              And Amplifying African Voices and Efforts towards
              <span class="text-yellow-secondary font-bold">
                Universal Abortion Rights And Care.</span
              >
            </p>
          </div>
        </div>
        <div class="mt-4 px-8 2xl:px-56">
          <div class="relative w-full" style="padding-bottom: 56.25%">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              title="The CATALYSTS"
              src="https://www.youtube.com/embed/deh16wy6_7I?autoplay=0&loop=1&rel=0&showinfo=0&modestbranding=0&controls=1&enablejsapi=1"
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
          <img
            src="@/assets/images/who-we-are.svg"
            alt="Title Image"
            class="hidden md:block relative z-10"
          />
          <img
            src="@/assets/images/who-we-are-sm.svg"
            alt="Title Image"
            class="block md:hidden relative z-10"
          />
        </div>

        <div class="h-full pt-10 py-8 md:py-24">
          <div
            class="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg overflow-y-auto relative mx-auto"
          >
            <!-- bg-opacity-50 makes the background slightly transparent -->
            <p class="text-lg md:text-3xl font-normal leading-snug px-2 md:px-4 text-justify">
              We are an African-led alliance, committed to championing quality abortion care across
              the continent by uniting and amplifying African voices.
            </p>
            <p class="text-lg md:text-3xl font-normal leading-snug px-2 md:px-4 py-2 text-justify">
              As CATALYSTS, we leverage the strengths of our members to catalyze impactful change in
              abortion care. We champion the protection of reproductive rights, to ensure that every
              individual can access high-quality abortion care without barriers.
            </p>
            <p class="text-lg md:text-3xl font-normal leading-snug px-2 md:px-4 text-justify">
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
          class="px-4 md:px-20 pb-10 bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative overflow-hidden h-screen"
        >
          <div class="container">
            <img
              src="@/assets/images/join_us_landing.svg"
              alt="Join Us Title"
              class="hidden md:block max-w-full h-auto"
            />
            <img
              src="@/assets/images/join_us_landing_sm.svg"
              alt="Join Us Title"
              class="block md:hidden max-w-full h-auto"
            />
          </div>

          <div class="w-full h-full md:px-20">
            <img src="@/assets/images/magaphone.png" class="w-full h-full" />
            <!-- <img src="@/assets/images/magaphone_sm.png" class="w-full h-auto" /> -->
          </div>
        </section>
      </div>

      <section class="relative px-4 md:px-20 pb-10 bg-brown-primary overflow-hidden">
        <div class="">
          <!-- ReusableSvg component -->
          <div class="div">
            <img
              src="@/assets/images/become_a_catalyst_sm.svg"
              alt="Title Image"
              class="h-auto hidden md:block relative"
            />
            <img
              src="@/assets/images/become_a_catalyst_sm.svg"
              alt="Title Image"
              class="h-auto block md:hidden relative"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-3 py-20 px-4 md:px-1.5 gap-6">
          <!-- Loop through frames -->
          <div
            v-for="(frame, index) in socialFrames"
            :key="index"
            class="md:py-2 border bg-white border-gray-400 rounded-sm"
          >
            <div class="p-1.5 md:p-2 flex flex-col justify-center items-center">
              <div class="w-full">
                <img
                  :src="`/frames/${frame.image}`"
                  alt="Organization"
                  class="mb-4 rounded-md w-full"
                />
              </div>

              <h2 class="text-lg font-semibold mb-2 text-center">
                Social Media Frame: <span class="p-0.5">({{ frame.name }})</span>
              </h2>
              <a
                :href="`/frames/${frame.image}`"
                :download="`/frames/${frame.image}`"
                class="bg-blue-primary text-white px-8 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
              >
                Try It Out
              </a>
            </div>
            <!-- If there are only 3 items, add an empty div to center the last item -->
          </div>
        </div>
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
const socialFrames = [
  {
    name: 'Jessica',
    image: 'Catalysts_C_Hand_KV_1.jpg'
  },
  {
    name: 'Angela',
    image: 'Catalysts_C_Hand_KV_2.jpg'
  },
  {
    name: 'Mallah',
    image: 'Catalysts_C_Hand_KV_3.jpg'
  }
]
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
