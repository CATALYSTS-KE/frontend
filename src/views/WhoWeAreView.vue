<template>
  <div class="">
    <section class="section-with-background px-4 md:px-20">
      <!-- Container -->
      <div class="pb-8">
        <!-- ReusableSvg component -->
        <!-- <RectangleSvg
          fill="#00C4B3"
          width="482"
          height="99"
          viewBox="0 0 482 99"
          :path="path3"
          text="MANIFESTO"
          textFill="white"
          class=""
        /> -->
        <img src="@/assets/images/manifesto.svg" alt="Manifesto image" class="" />
      </div>
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

    <!-- Vision only -->
    <section
      class="px-4 md:px-20 pb-10 -mt-6 bg-yellow-primary bg-[url('@/assets/images/mission_bg.svg')] bg-cover bg-center relative overflow-hidden"
    >
      <!-- Container -->
      <div class="max-w-screen-xl">
        <div>
          <img src="@/assets/images/Vision.svg" alt="Vision image" class="" />
        </div>

        <div class="py-8 w-full aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSKHnZPO-AOqlqL5EfMfaMNMJmVwPv2suA1r0qJ6M2bmC1Wmhy2AxKb2GdgRZhyUw/embed?start=true&loop=true&delayms=3000"
            frameborder="0"
            width="962"
            height="564"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            class=""
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="thematic-section bg-teal-400 pb-0">
      <div class="px-4 md:px-20">
        <div class="">
          <!-- ReusableSvg component -->
          <img src="@/assets/images/our_story.svg" alt="Our Story" class="" />
        </div>
      </div>
      <div class="mx-4 md:mx-20 py-12 h-full">
        <!-- Loop through your data -->
        <div
          v-for="(item, index) in cardData"
          :key="index"
          class="bg-white shadow-md rounded-lg h-96 overflow-auto"
        >
          <div class="flex flex-col md:flex-row">
            <!-- Text Content -->
            <div class="p-4">
              <h2 class="text-2xl px-12 text-red-primary">{{ item.title }}</h2>
              <p
                class="text-lg font-normal leading-snug px-4 md:px-12 py-6 text-justify mt-2 text-gray-600"
                v-html="item.message"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// const path3 = 'M481.68 4.70001V85.13L0 98.22V0L481.68 4.70001Z'

const cardData = [
  {
    title: 'Clearly outline the pillars that guide Catalysts',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc
      consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices
      sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor
      commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam
      maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla
      aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget.
      Vel pharetra vel turpis nunc eget.
      <br>
      <br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc 
      consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices 
      sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor 
      commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam 
      maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla 
      aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget. 
      Vel pharetra vel turpis nunc eget.
      <br>
      <br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc 
      consequat interdum. Eget arcu dictum varius duis at. Sollicitudin aliquam ultrices 
      sagittis orci a scelerisque purus semper eget. Ac turpis egestas sed tempus. Tempor 
      commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam 
      maecenas sed enim ut sem. Viverra nibh cras pulvinar mattis. Vulputate enim nulla 
      aliquet porttitor lacus luctus accumsan tortor posuere. Eu sem integer vitae justo eget. 
      Vel pharetra vel turpis nunc eget.`
  }
]
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
}

/* width */
::-webkit-scrollbar {
  width: 14px;
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
