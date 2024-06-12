<template>
  <div class="">
    <section class="section-with-background px-4">
      <!-- Container -->
      <div class="md:px-20">
        <!-- Title Catalyst Approach -->
        <div class="md:px-4">
          <img
            src="@/assets/images/catalysts_approach_lg.svg"
            alt="Title Catalyst Approach"
            class="hidden md:block relative z-10"
          />
          <img
            src="@/assets/images/catalysts_approach.svg"
            alt="Title Catalyst Approach"
            class="block md:hidden relative z-10"
          />
        </div>

        <!-- 5 C'S content -->
        <div class="px-2 md:px-4 py-8 md:pb-20">
          <div
            class="container md:px-5 py-4 bg-white bg-opacity-60 rounded-lg shadow-lg max-h-screen overflow-auto"
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
                      :src="`/5C/${item.image}`"
                      alt="Card image"
                      class="h-full w-full object-contain rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <!-- Text Content -->
                  <div class="px-2 pb-4 md:p-4 flex justify-center items-center md:w-3/4">
                    <div class="max-w-full">
                      <!-- Limit width of text content -->
                      <h2
                        class="text-lg md:text-2xl font-semibold text-red-primary uppercase mb-2 text-center md:text-left"
                      >
                        {{ item.title }}
                      </h2>
                      <p class="text-gray-600 md:text-2xl text-center md:text-left">
                        {{ item.message }}
                      </p>
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
          fill="#FFDD00"
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
          class="block md:hidden px-4 absolute top-0 transform -translate-x-0.5 -translate-y-6"
        />
      </div>
      <div class="md:pl-10 xl:pl-20 2xl:pl-40 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 md:pt-20">
        <!-- Loop through frames -->
        <div
          v-for="(member, index) in memberVideos"
          :key="index"
          :class="['w-full mt-4 px-8 border-gray-400 rounded-lg']"
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
    title: 'CONVENING AND CONNECTING:',
    message:
      'CATALYSTS seeks to establish a central space for dialogue, resources, and information on abortion rights. Through events and other forums, we will create avenues for knowledge exchange.  By providing spaces for interaction and networking we aim to build meaningful connections and collaborations among stakeholders in abortion care and rights.',

    image: 'AI-Generated-C_2.jpg'
  },
  {
    title: 'CULTIVATING TECHNICAL EXCELLENCE:',
    message:
      'CATALYSTS will leverage the combined knowledge, skills, and resources of our members to offer valuable support to organizations working in the abortion rights space. We shall establish CATALYSTS as a reliable source of knowledge and information by enabling the creation of relevant content and sharing insightful lessons from such content to strengthen the entire field.',
    image: 'AI-Generated-C_5.jpg'
  },
  {
    title: 'COORDINATING FOR SUCCESS:',
    message:
      "CATALYSTS seeks to bolster abortion rights activism in targeted African nations. We intend to build solidarity, amplify voices, and facilitate coordinated responses for a constructive, justice-focused, Africa-led movement. This will include exchanging resources and organizing concerted efforts to enhance the movement's collective ability to defend and advance abortion rights.",
    image: 'AI-Generated-C_1.jpg'
  },
  {
    title: 'CENTRALIZING RESEARCH:',
    message:
      'CATALYSTS aims to be the go-to source for up-to-date information on cutting-edge techniques, best practices, and research on abortion rights. We will create a Research and Knowledge hub, compiling cutting-edge research, collaborating with research centers and academic institutions, and curating and disseminating research findings widely.',
    image: 'AI-Generated-C_4.jpg'
  },
  {
    title: 'BUILDING CATALYTIC CAPITAL:',
    message:
      'Recognizing the urgent need for greater, non-traditional funding for abortion rights, CATALYSTS will promote and support innovative funding practices that advance inclusion for overlooked actors. We aim to redefine best practices in feminist philanthropy and influence the philanthropic landscape. Our goal is to accelerate experimentation and the development of significant solutions in abortion care by bringing together conventional and non-traditional donors to explore novel funding strategies.',
    image: 'AI-Generated-C_3.jpg'
  }
]

const memberVideos = [
  {
    title: 'Dr. Angela Akol',
    video:
      'https://www.youtube.com/embed/QtJ8g9Wtou4?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1'
  },
  {
    title: 'Dr Harriet Birungi',
    video:
      'https://www.youtube.com/embed/KkI9bWXrMbs?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1'
  },
  {
    title: 'Salima Namusobya',
    video:
      'https://www.youtube.com/embed/BcOPLiU45QI?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1'
  },
  {
    title: 'Chichi Undie',
    video:
      'https://www.youtube.com/embed/xn4N6-8zMg0?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1'
  },
  {
    title: 'Mallah Tabot',
    video:
      'https://www.youtube.com/embed/6kQwxp__W0M?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1'
  },
  {
    title: 'Dr Odula',
    video:
      'https://www.youtube.com/embed/_2Mfxkl9vIo?autoplay=0&rel=0&showinfo=0&modestbranding=0&controls=1&loop=1'
  }
]
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/pattern_vector_blue.svg')] bg-cover bg-center py-12;
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
