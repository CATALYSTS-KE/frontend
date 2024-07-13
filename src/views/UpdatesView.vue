<template>
  <div class="bg-teal-400">
    <!-- News & Articles  -->
    <div class="w-full h-full">
      <img
        src="@/assets/images/coming_soon.webp"
        alt="Coming Soon"
        class="w-full h-full bg-cover bg-center"
      />
    </div>
    <!-- <section class="pt-10">
      <div class="px-4 md:px-20 md:pb-20">
        <div class="md:px-0 pb-11">

          <img
            src="@/assets/images/articles_title.svg"
            alt="NEWS & ARTICLES"
            class="hidden md:block object-none"
          />
          <RectangleSvg
            fill="#FF5F00"
            width="189"
            height="32"
            viewBox="0 0 189 32"
            :path="path2"
            text="NEWS & ARTICLES"
            textFill="white"
            class="block md:hidden font-bold"
          />
        </div>
        <div
          class="px-4 md:p-2 lg:p-2 md:h-[600px] mb-12 bg-white shadow-md rounded-lg overflow-auto"
        >
       
          <div v-for="index in 2" :key="index" class="md:pb-8">
            <div class="flex flex-col md:flex-row">
          
              <div class="p-4 md:pb-0">
                <h2 class="text-2xl px-4 md:px-12 text-red-primary">{{ cardData.title }}</h2>
                <p
                  class="text-lg font-normal leading-snug px-4 md:px-12 md:py-6 text-justify text-gray-600"
                  v-html="cardData.message"
                ></p>
                <div class="px-12">
                  <RectangleSvg
                    fill="#CDDE00"
                    width="197"
                    height="48"
                    viewBox="0 0 197 48"
                    :path="path4"
                    text="Read More"
                    textFill="black"
                    class="hidden md:block font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section
      class="pb-10 bg-[#943700] bg-[url('@/assets/images/events_bg.png')] bg-cover bg-center relative"
    >
      <div class="px-20">
        <div
          class="absolute top-0 transform -translate-x-0.5 -translate-y-24 md:-translate-y-8 font-bold"
        >
          <img
            src="@/assets/images/events_title.svg"
            alt="Upcomin Events"
            class="hidden md:block object-none"
          />
          <RectangleSvg
            fill="#CDDE00"
            width="143"
            height="44"
            viewBox="0 0 143 44"
            :path="path5"
            text="UPCOMING EVENTS"
            textFill="white"
            class="md:hidden block font-bold mt-20"
          />
        </div>
      </div>
      <div class="px-2 md:px-4 pt-14 md:pt-24">
        <swiper-container
          ref="swiper"
          :slides-per-view="1"
          :space-between="10"
          :navigation="true"
          :observer="true"
          :observe-parents="true"
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <div class="flex flex-col items-">
              <div class="bg-white m-2 p-1 rounded-sm">
                <img
                  :src="`${slide.imgSrc}`"
                  :alt="slide.imgAlt"
                  class="mb-4 w-full shadow-md"
                />
                <h3
                  v-if="!slide.isComingSoon"
                  class="text-xl font-black md:text-3xl text-gray-primary px-4 tracking-wide"
                >
                  {{ slide.title }}
                </h3>
                <h3
                  v-else
                  class="text-xl font-black md:text-3xl text-gray-primary px-4 tracking-wide"
                >
                  {{ slide.title }}
                </h3>
                <p v-if="!slide.isComingSoon" class="mb-1 text-gray-500 text-left p-4 md:text-xl">
                  {{ slide.description }}
                </p>
                <p v-else class="mb-1 text-gray-500 text-left p-4 md:text-xl">
                  {{ slide.description }}
                </p>
                <div class="mb-3 px-4">
                  <p
                    v-if="!slide.isComingSoon"
                    class="mb-6 py-1 px-2 bg-[#EE3b26] text-white text-md md:text-xl inline-block font-bold"
                  >
                    {{ slide.date }}
                  </p>
                  <p
                    v-else
                    class="mb-6 py-1 px-2 bg-[#EE3b26] text-white text-xl inline-block font-bold"
                  >
                    <span class="invisible">{{ slide.date }}</span>
                  </p>
                </div>
              </div>
              <div class="flex justify-between -mt-5 px-4">
                <a href="https://procurement.ipas.org/rfp/consortium-coordinator/">
                  <RectangleSvg
                    fill="#00C4B3"
                    :width="142"
                    :height="44"
                    viewBox="0 0 142 44"
                    :path="path6"
                    text="REGISTER"
                    textFill="white"
                    class=""
                  />
                </a>
                <a href="https://procurement.ipas.org/rfp/consortium-coordinator/">
                <RectangleSvg
                  fill="#FFDD00"
                  :width="143"
                  :height="44"
                  viewBox="0 0 143 44"
                  :path="path7"
                  text="REMIND ME"
                  textFill="black"
                  class="text font-extrabold"
                />
              </a>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  </div>
</template>

<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'

const slides = ref([
  {
    id: 1,
    imgSrc: 'https://res.cloudinary.com/djgy5qzmy/image/upload/v1720815741/coming_soon_2_1_jvdmhg.webp',
    imgAlt: 'Organization',
    title: 'IUSSP Scientific Panel on Abortion Research, International Seminar',
    description:
      'Improving measurement of abortion incidence and safety: Innovations in methodology and recent empirical studies - Mombasa, Kenya',
    date: '19 - 21ST NOVEMBER, MOMBASA',
    isComingSoon: false
  },
  {
    id: 2,
    imgSrc: 'https://res.cloudinary.com/djgy5qzmy/image/upload/v1720815463/IPAS_Africa_Alliance_dzham7.png',
    imgAlt: 'Organization',
    title: 'Job Opportunity ',
    description: 'Consortium Coordinator',
    date: '17TH JULY, 2024',
    isComingSoon: false
  },
  {
    id: 3,
    imgSrc: 'https://res.cloudinary.com/djgy5qzmy/image/upload/v1720815741/coming_soon_2_1_jvdmhg.webp',
    imgAlt: 'Organization',
    title: 'STAY TUNED',
    description: 'Coming Soon',
    date: '5<sup>th</sup> AUGUST, NAIROBI',
    isComingSoon: true
  },
  {
    id: 4,
    imgSrc: 'https://res.cloudinary.com/djgy5qzmy/image/upload/v1720815741/coming_soon_2_1_jvdmhg.webp',
    imgAlt: 'Organization',
    title: 'STAY TUNED --',
    description: 'Coming Soon',
    date: '5<sup>th</sup> AUGUST, NAIROBI',
    isComingSoon: true
  }
])
const path5 =
  'M1.1958 4.88167L1.21299 4.85398H1.33343C1.45386 4.82608 1.55709 4.77952 1.68612 4.77952C1.78074 4.77952 1.86674 4.82585 1.96136 4.84444L141.082 0L141.125 0.03723C141.194 0.0279316 141.245 0 141.314 0C142.243 0 143 0.808909 143 1.80384V42.1871C143 43.182 142.243 44 141.314 44L1.68612 38.7837C0.7485 38.7837 0.000105955 37.975 0.000105955 36.9708V6.59244C-0.00849606 5.76488 0.507637 5.10484 1.1958 4.88167Z'
const path6 =
  'M140.813 4.88167L140.795 4.85398H140.676C140.556 4.82608 140.454 4.77952 140.326 4.77952C140.232 4.77952 140.146 4.82585 140.052 4.84444L1.90483 0L1.86213 0.03723C1.7938 0.0279316 1.74255 0 1.67421 0C0.751689 0 0 0.808909 0 1.80384V42.1871C0 43.182 0.751689 44 1.67421 44L140.326 38.7837C141.257 38.7837 142 37.975 142 36.9708V6.59244C142.008 5.76488 141.504 5.10484 140.813 4.88167Z'
const path7 =
  'M1.1958 4.88167L1.21299 4.85398H1.33343C1.45386 4.82608 1.55709 4.77952 1.68612 4.77952C1.78074 4.77952 1.86674 4.82585 1.96136 4.84444L141.082 0L141.125 0.03723C141.194 0.0279316 141.245 0 141.314 0C142.243 0 143 0.808909 143 1.80384V42.1871C143 43.182 142.243 44 141.314 44L1.68612 38.7837C0.7485 38.7837 0.000105955 37.975 0.000105955 36.9708V6.59244C-0.00849606 5.76488 0.507637 5.10484 1.1958 4.88167Z'
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
}

.mySwiper {
  width: 100%;
  height: 100%;
}
</style>
