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
      <div class="px-2 md:px-4 pt-14 md:pt-24 grid-cols-1 grid md:grid-cols-3 gap-x-4">
        <div v-for="index in 3" :key="index" class="flex flex-col items-">
          <div class="bg-white m-2 p-1 rounded-sm">
            <img
              src="@/assets/images/coming_soon_2.webp"
              alt="Organization"
              class="mb-4 w-full shadow-md"
            />
            <h3
              v-if="index === 1"
              class="text-xl font-black md:text-3xl text-gray-primary px-4 tracking-wide"
            >
              IUSSP Scientific Panel on Abortion Research, International Seminar
            </h3>
            <h3 v-else class="text-xl font-black md:text-3xl text-gray-primary px-4 tracking-wide">
              STAY TUNED
            </h3>
            <p v-if="index === 1" class="mb-1 text-gray-500 text-left p-4 md:text-xl">
              Improving measurement of abortion incidence and safety: Innovations in methodology and
              recent empirical studies - Mombasa, Kenya
            </p>
            <p v-else class="mb-1 text-gray-500 text-left p-4 md:text-xl">Coming Soon</p>
            <div class="mb-3 px-4">
              <p
                v-if="index === 1"
                class="mb-6 py-1 px-2 bg-[#EE3b26] text-white text-md md:text-xl inline-block font-bold"
              >
                19 - 21ST NOVEMBER, MOMBASA
              </p>
              <p
                v-else
                class="mb-6 py-1 px-2 bg-[#EE3b26] text-white text-xl inline-block font-bold"
              >
                <span class="invisible">5<sup>th</sup> AUGUST, NAIROBI </span>
              </p>
            </div>
          </div>
          <div class="flex justify-between -mt-5 px-4">
            <a href="https://iussp.org/en/abortion-research">
              <RectangleSvg
                fill="#00C4B3"
                width="142"
                height="44"
                viewBox="0 0 142 44"
                :path="path6"
                text="REGISTER"
                textFill="white"
                class=""
              />
            </a>
            <RectangleSvg
              fill="#FFDD00"
              width="143"
              height="44"
              viewBox="0 0 143 44"
              :path="path7"
              text="REMIND ME"
              textFill="black"
              class="text font-extrabold"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
// const path2 = 'M188.695 1.4411V27.9419L0 31.9555V0L188.695 1.4411Z'
// const path4 =
//   'M194.85 5.25L194.83 5.22003H194.69C194.55 5.19003 194.43 5.14001 194.28 5.14001C194.17 5.14001 194.07 5.19002 193.96 5.21002L2.22998 0L2.17999 0.039978C2.09999 0.029978 2.03999 0 1.95999 0C0.879991 0 0 0.870002 0 1.94V45.37C0 46.44 0.879991 47.32 1.95999 47.32L98.12 44.515L194.28 41.71C195.37 41.71 196.24 40.84 196.24 39.76V7.09003C196.25 6.21003 195.66 5.49 194.85 5.25Z'
const path5 =
  'M1.1958 4.88167L1.21299 4.85398H1.33343C1.45386 4.82608 1.55709 4.77952 1.68612 4.77952C1.78074 4.77952 1.86674 4.82585 1.96136 4.84444L141.082 0L141.125 0.03723C141.194 0.0279316 141.245 0 141.314 0C142.243 0 143 0.808909 143 1.80384V42.1871C143 43.182 142.243 44 141.314 44L1.68612 38.7837C0.7485 38.7837 0.000105955 37.975 0.000105955 36.9708V6.59244C-0.00849606 5.76488 0.507637 5.10484 1.1958 4.88167Z'

const path6 =
  'M140.813 4.88167L140.795 4.85398H140.676C140.556 4.82608 140.454 4.77952 140.326 4.77952C140.232 4.77952 140.146 4.82585 140.052 4.84444L1.90483 0L1.86213 0.03723C1.7938 0.0279316 1.74255 0 1.67421 0C0.751689 0 0 0.808909 0 1.80384V42.1871C0 43.182 0.751689 44 1.67421 44L140.326 38.7837C141.257 38.7837 142 37.975 142 36.9708V6.59244C142.008 5.76488 141.504 5.10484 140.813 4.88167Z'
const path7 =
  'M1.1958 4.88167L1.21299 4.85398H1.33343C1.45386 4.82608 1.55709 4.77952 1.68612 4.77952C1.78074 4.77952 1.86674 4.82585 1.96136 4.84444L141.082 0L141.125 0.03723C141.194 0.0279316 141.245 0 141.314 0C142.243 0 143 0.808909 143 1.80384V42.1871C143 43.182 142.243 44 141.314 44L1.68612 38.7837C0.7485 38.7837 0.000105955 37.975 0.000105955 36.9708V6.59244C-0.00849606 5.76488 0.507637 5.10484 1.1958 4.88167Z'
// const cardData = {
//   title: 'Overview of Abortion laws by country, In Africa',
//   message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//         incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
//         consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
//         sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
//         commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
//         maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
//         aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
//         Vel pharetra vel turpis nunc eget.`
// }
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
}

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
