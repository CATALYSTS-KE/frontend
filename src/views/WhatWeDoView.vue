<template>
  <div class="">
    <section class="section-with-background px-4">
      <!-- Container -->
      <div class="md:px-20">
        <div class="md:p-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#FF5F00"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="The 5 C'S"
            textFill="white"
            class=""
          />
        </div>

        <!-- 5 C'S content -->
        <div class="px-8 md:px-10 py-12">
          <div
            class="container h-96 md:px-10 py-4 bg-white bg-opacity-60 rounded-lg shadow-lg max-h-screen overflow-auto"
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
                  <div class="">
                    <img
                      src="@/assets/images/5Cboy.png"
                      alt="Card image"
                      class="h-auto w-full object-cover"
                    />
                    <!-- <img :src="item.image" alt="Card image" class="h-auto w-full object-cover" /> -->
                  </div>
                  <!-- Text Content -->
                  <div class="p-4">
                    <div class="max-w-xs">
                      <!-- Limit width of text content -->
                      <h2 class="text-lg font-semibold text-red-primary uppercase">
                        {{ item.title }}
                      </h2>
                      <p class="mt-2 text-gray-600">{{ item.message }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Thematic section -->
    <section class="thematic-section px-4 bg-yellow-primary pb-20">
      <!-- Container -->
      <div class="md:px-20">
        <div class="pb-8 md:px-4">
          <!-- ReusableSvg component -->
          <RectangleSvg
            fill="#FF5F00"
            width="482"
            height="99"
            viewBox="0 0 482 99"
            :path="path3"
            text="Thematic Areas"
            textFill="white"
            class=""
          />
        </div>

        <div class="px-2 md:px-0">
          <h1 class="text-4xl font-normal leading-tight px-4 py-2 text-gray-900">
            Explain the origins and goals of Catalysts:
          </h1>
          <p class="text-lg font-normal leading-snug px-4 py-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
            consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
            maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
            aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
            Vel pharetra vel turpis nunc eget.
          </p>
          <p class="text-lg font-normal leading-snug px-4 py-2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
            consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
            maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
            aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
            Vel pharetra vel turpis nunc eget.
          </p>
        </div>
      </div>
    </section>

    <!-- Member Videos -->
    <section
      class="pb-10 md:px-20 bg-orange-primary bg-[url('@/assets/images/vector_orange.svg')] bg-cover bg-center relative overflow-hidden"
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
          class=""
        />
      </div>

      <div class="md:pl-10 xl:pl-20 2xl:pl-40 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        <!-- Loop through frames -->
        <div
          v-for="member in memberVideos"
          :key="member"
          class="w-full mt-4 px-8 border-gray-400 rounded-lg"
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
const path3 = 'M481.68 4.70001V85.13L0 98.22V0L481.68 4.70001Z'

const cardData = [
  {
    title: 'CO-ORDINATING FOR SUCCESS',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tincidunt arcu. Sed sodales risus vel efficitur pretium.',
    image: '../assets/images/5Cboy.png'
  },
  {
    title: 'CONNECTING AND CONVENING',
    message:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus purus ac ligula semper ullamcorper.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'CULTIVATING TECHNICAL EXCELLENCE',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor ullamcorper nibh, vel varius turpis tincidunt vitae.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Card 4',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor ullamcorper nibh, vel varius turpis tincidunt vitae.',
    image: 'https://via.placeholder.com/150'
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
    title: 'CULTIVATING TECHNICAL EXCELLENCE',
    video:
      'https://www.youtube.com/embed/KkI9bWXrMbs?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
  },
  {
    title: 'Card 4',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor ullamcorper nibh, vel varius turpis tincidunt vitae.',
    video:
      'https://www.youtube.com/embed/QtJ8g9Wtou4?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1&enablejsapi=1'
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
