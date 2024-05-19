<template>
  <div class="">
    <section class="section-with-background px-4">
      <!-- Container -->
      <div class="md:px-20">
        <!-- Title Catalyst Approach -->
        <div class="md:px-4">
          <img
            src="@/assets/images/catalysts_approach.svg"
            alt="Title Catalyst Approach"
            class="hidden md:block relative z-10"
          />
          <img
            src="@/assets/images/catalysts_approach.svg"
            alt="Title Catalyst Approach"
            class="block md:hidden relative z-10"
          />
        </div>
        <!-- Title What We Do-->
        <div class="md:px-4">
          <img
            src="@/assets/images/what_we_do.svg"
            alt="What we do title"
            class="hidden md:block relative z-10"
          />
          <img
            src="@/assets/images/what_we_do.svg"
            alt="Title Image"
            class="block md:hidden relative z-10"
          />
        </div>

        <!-- 5 C'S content -->
        <div class="px-2 md:px-10 py-12 md:pb-20">
          <div
            class="container md:px-10 py-4 bg-white bg-opacity-60 rounded-lg shadow-lg max-h-screen overflow-auto"
          >
            <div class="grid gap-6 w-full">
              <!-- Loop through your data -->
              <div
                v-for="(item, index) in cardData"
                :key="index"
                class="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div class="flex flex-col md:flex-row">
                  <!-- Image -->
                  <div class="md:w-1/4">
                    <div class="aspect-w-16 aspect-h-9">
                      <img
                        :src="`/5C/${item.image}`"
                        alt="Card image"
                        class="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                  </div>
                  <!-- Text Content -->
                  <div class="p-4 flex justify-center md:justify-start items-center">
                    <div class="max-w-full">
                      <!-- Limit width of text content -->
                      <h2
                        class="text-lg font-semibold text-red-primary uppercase mb-2 text-center md:text-left"
                      >
                        {{ item.title }}
                      </h2>
                      <p class="text-gray-600 text-center md:text-left">{{ item.message }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Member Videos -->
    <section
      class="pb-10 md:px-20 bg-orange-primary bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative"
    >
      <div class="md:px-4">
        <!-- ReusableSvg component -->
        <RectangleSvg
          fill="#00C4B3"
          width="601"
          height="99"
          viewBox="0 0 601 99"
          :path="path2"
          text="MEMBER VIDEOS"
          textFill="white"
          class="hidden md:block lg:absolute lg:top-0 lg:transform lg:-translate-x-0.5 lg:-translate-y-16 font-bold"
        />
        <img
          src="@/assets/images/member_videos_sm.svg"
          alt="Title Image"
          class="block md:hidden px-4"
        />
      </div>
      <div class="md:pl-10 xl:pl-20 2xl:pl-40 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 md:pt-20">
        <!-- Loop through frames -->
        <div
          v-for="(member, index) in memberVideos"
          :key="index"
          :class="[
            'w-full mt-4 px-8 border-gray-400 rounded-lg',
            index === memberVideos.length - 1
              ? 'md:col-span-2 md:col-start-1 md:w-1/2 md:col-end-3 md:mx-auto '
              : ''
          ]"
        >
          <div
            style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden"
            class=""
          >
            <iframe
              class="w-full"
              title="What is CATALYSTS? Dr. Angela Akol - Ipas Africa Alliance"
              style="position: absolute; top: 0; left: 0; height: 100%"
              :src="member.video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
// const path1 = 'M483.92 14.01V101.44L5.14008 112.86V7.63013L483.92 14.01Z'
const path2 = 'M600.84 4.69995V85.1301L0 98.23V0L600.84 4.69995Z'

const cardData = [
  {
    title: 'CO-ORDINATING FOR SUCCESS',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt arcu. Sed sodales risus vel efficitur pretium.',
    image: 'AI-Generated-C_1.jpg'
  },
  {
    title: 'CONNECTING AND CONVENING',
    message:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus purus ac ligula semper ullamcorper.',
    image: 'AI-Generated-C_2.jpg'
  },
  {
    title: 'CULTIVATING TECHNICAL EXCELLENCE',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor ullamcorper nibh, vel varius turpis tincidunt vitae.',
    image: 'AI-Generated-C_3.jpg'
  },
  {
    title: 'Card 4',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor ullamcorper nibh, vel varius turpis tincidunt vitae.',
    image: 'AI-Generated-C_4.jpg'
  },
  {
    title: 'Card 5',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor ullamcorper nibh, vel varius turpis tincidunt vitae.',
    image: 'AI-Generated-C_5.jpg'
  }
]

const memberVideos = [
  {
    title: 'Dr. Angela Akol',
    video:
      'https://www.youtube.com/embed/QtJ8g9Wtou4?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
  },
  {
    title: 'Dr Harriet Birungi',
    video:
      'https://www.youtube.com/embed/KkI9bWXrMbs?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
  },
  {
    title: 'Salima Namusobya',
    video:
      'https://www.youtube.com/embed/BcOPLiU45QI?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
  },
  {
    title: 'Chichi Undie',
    video:
      'https://www.youtube.com/embed/xn4N6-8zMg0?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
  },
  {
    title: 'Mallah Tabot',
    video:
      'https://www.youtube.com/embed/6kQwxp__W0M?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
  }
]
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/what_we_do.png')] bg-cover bg-center py-12;
}

.content {
  @apply relative z-10 max-w-[1200px] mx-auto px-4;
}

.text-content {
  @apply mt-5;
}

.text-content div {
  @apply mb-5;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
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
