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
        <div class="mt-4 px-8 2xl:px-56 md:pb-40">
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
        class="relative px-4 md:px-20 lg:py-20 flex flex-col justify-center bg-[url('@/assets/images/who-we-are-bg.webp')] bg-cover bg-center"
      >
        <div class="lg:absolute lg:top-0 lg:transform lg:-translate-x-0.5 lg:-translate-y-16">
          <img
            src="@/assets/images/who-we-are.svg"
            alt="Title Image"
            class="hidden md:block relative z-10"
          />
          <img
            src="@/assets/images/who-we-are-sm.svg"
            alt="Title Image"
            class="block md:hidden relative z-10 top-0 transform -translate-x-0.5 -translate-y-4"
          />
        </div>

        <!-- <div class="flex flex-1 items-center justify-center"> -->
        <div class="h-full pt-10 py-8 md:py-24">
          <div
            class="bg-white text-gray-primary bg-opacity-60 p-8 rounded-lg shadow-lg overflow-y-auto relative mx-auto text-center md:text-justify"
          >
            <!-- bg-opacity-50 makes the background slightly transparent -->
            <p
              class="text-lg md:text-2xl 2xl:text-3xl font-normal leading-snug md:px-4 py-1.5 md:py-2"
            >
              We are an African-led alliance, committed to championing quality abortion care across
              the continent by uniting and amplifying African voices.
            </p>
            <p
              class="text-lg md:text-2xl 2xl:text-3xl font-normal leading-snug md:px-4 py-2 md:py-2"
            >
              As CATALYSTS, we leverage the strengths of our members to catalyze impactful change in
              abortion care. We champion the protection of reproductive rights, to ensure that every
              individual can access high-quality abortion care without barriers.
            </p>
            <p
              class="text-lg md:text-2xl 2xl:text-3xl font-normal leading-snug md:px-4 py-1.5 md:py-2"
            >
              Coming together elevates our capacity to unlock flexible resources and establish
              meaningful partnerships. We are unapologetic and united towards sparking change for
              abortion care across the continent.
            </p>
          </div>
        </div>
      </section>
      <!-- <div class="bg-black"> -->
      <!-- Join Us -->

      <div class="bg-[#FF5F00]">
        <section
          class="relative bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center px-4 md:pl-20"
        >
          <div
            class="container lg:absolute lg:top-0 lg:transform lg:-translate-x-0.5 lg:-translate-y-16 md:px-20"
          >
            <img
              src="@/assets/images/join_us_landing.svg"
              alt="Join Us Title"
              class="hidden md:block max-w-full h-auto z-40"
            />
            <img
              src="@/assets/images/join_us_landing_sm.svg"
              alt="Join Us Title"
              class="block md:hidden max-w-full h-auto top-0 transform -translate-x-0.5 -translate-y-4"
            />
          </div>

          <div class="h-full pt-10 flex justify-center">
            <img
              src="@/assets/images/magaphone.png"
              @click="showForm = true"
              class="cursor-pointer"
              alt="Megaphone"
            />
          </div>
        </section>

        <!-- Pop-up Form -->
        <div
          v-if="showForm"
          class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div
            class="bg-white rounded-lg p-8 w-full max-w-lg mx-4 transform transition-transform duration-500 ease-in-out"
            :class="showForm ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
          >
            <h2 class="text-2xl font-bold mb-4">Join Us</h2>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="mr-4 py-2 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                  @click="showForm = false"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section class="relative px-4 md:px-20 pb-10 bg-brown-primary">
        <div class="lg:absolute lg:top-0 lg:transform lg:-translate-x-0.5 lg:-translate-y-12">
          <img
            src="@/assets/images/become_a_catalyst.svg"
            alt="Title Image"
            class="h-auto hidden md:block relative"
          />
          <img
            src="@/assets/images/become_a_catalyst_sm.svg"
            alt="Title Image"
            class="h-auto block md:hidden top-0 transform -translate-y-6"
          />
        </div>

        <div class="grid md:grid-cols-3 py-20 md:py-40 px-4 md:px-1.5 gap-6">
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
              <a
                :href="`/frames/${frame.image}`"
                :download="`/frames/${frame.frame}`"
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
import { ref } from 'vue'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/vue';
//   // Import Swiper styles
//   import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar'import { ref } from 'vue';

const showForm = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: ''
})
const socialFrames = [
  {
    name: 'Jessica',
    image: 'Catalysts_C_Hand_KV_1.jpg',
    frame: 'Catalysts_C_Hand_KV_1_frame.png'
  },
  {
    name: 'Angela',
    image: 'Catalysts_C_Hand_KV_2.jpg',
    frame: 'Catalysts_C_Hand_KV_2_frame.jpg'
  },
  {
    name: 'Mallah',
    image: 'Catalysts_C_Hand_KV_3.jpg',
    frame: 'Catalysts_C_Hand_KV_3_frame.png'
  }
]

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  showForm.value = false
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
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
