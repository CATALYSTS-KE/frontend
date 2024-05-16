<template>
  <div class="">
    <section class="section-with-background px-4 md:px-20">
      <!-- Container -->
      <div class="pb-8">
        <img src="@/assets/images/manifesto.svg" alt="Manifesto image" class="hidden md:block" />
        <img src="@/assets/images/manifesto_sm.svg" alt="Manifesto image" class="block md:hidden" />
      </div>
      <div class="mt-4 2xl:px-56 pb-20">
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
      class="relative px-4 md:px-20 pb-10 -mt-6 bg-yellow-tertiary bg-[url('@/assets/images/mission_bg.svg')] bg-cover bg-center"
    >
      <!-- Container -->
      <div class="max-w-screen-xl">
        <div class="lg:absolute lg:top-0 lg:transform lg:-translate-x-0.5 lg:-translate-y-16">
          <img src="@/assets/images/Vision.svg" alt="Vision image" class="hidden md:block" />
          <img src="@/assets/images/vision_sm.svg" alt="Vision image" class="block md:hidden" />
        </div>

        <div class="py-8 md:py-28 md:text-3xl text-gray-primary text-justify">
          <p>
            Our vision is to create a vibrant, diverse network of supporters, financiers,
            researchers, and activists who are dedicated to upholding and expanding the rights to
            abortion. We envision a time when everyone has access to and uses high-quality,
            rights-based abortion services.
          </p>
          <p class="pt-4">
            Our purpose is to change societal norms, push for legislation and policies that support
            abortion care, and advance research and evidence-based procedures. We all work towards a
            future in which everyone has access to safe and authorized abortion care.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="relative thematic-section bg-teal-400 pb-0">
      <div class="px-4 md:px-20">
        <div class="lg:absolute lg:top-0 lg:transform lg:-translate-x-0.5 lg:-translate-y-16">
          <!-- ReusableSvg component -->
          <img src="@/assets/images/our_story.svg" alt="Our Story" class="hidden md:block" />
          <img src="@/assets/images/our_story_sm.svg" alt="Our Story" class="block md:hidden" />
        </div>
      </div>
      <div class="mx-4 md:mx-20 py-12 md:py-28 h-full">
        <!-- Loop through your data -->
        <div
          v-for="(item, index) in cardData"
          :key="index"
          class="bg-white shadow-md rounded-lg h-96 overflow-auto"
        >
          <div class="flex flex-col md:flex-row">
            <!-- Text Content -->
            <div class="p-4">
              <h2 class="text-2xl px-4 md:px-12 text-red-primary font-bold">{{ item.title }}</h2>
              <p
                class="text-base md:text-2xl font-normal leading-snug px-2 md:px-12 py-6 text-justify mt-2 text-gray-600"
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
    title: 'Pillars That Guide Catalysts',
    message: `The US Supreme Court overturned Roe V Wade through a landmark ruling. In the wake of the ruling, we started coming together informally to ask ourselves tough questions, the
most important being “What are the implications of this ruling beyond US borders and in Africa?”
      <br>
      <br>
      Motivated by a common goal of preserving hard-won gains and expanding access to abortion services across the African continent, we embarked on a collaborative and insightful journey. It became evident that competing for scarce donor funds or operating in silos was unsustainable. The task at hand required cooperation and teamwork. It was clear that we were not the only ones on this quest. Experts agreed with us, highlighting the necessity of a coordinated effort to protect reproductive rights in Africa.
      <br>
      <br>
      We are motivated by groups like LGBTQIA+ advocacy, THE OUAGADOUGOU PARTNERSHIP, and THE GREEN WAVE IN LATIN AMERICA. These examples confirmed our belief that collective actions can result in meaningful transformation.
      <br>
      <br>
      Acknowledging the significance of utilizing the wider abortion ecosystem, we combined our assets and knowledge to proceed. This signaled the start of an extensive consultation process involving stakeholders with a variety of viewpoints and voices. We made sure that all pertinent parties were present, including donors, NGOs/INGOs, lawyers, grassroots activists, and medical professionals.
      <br>
      <br>
      At a pivotal workshop held in Nairobi, this wide network of partners came together to begin developing a Theory of Change and laying out a strategy for a coalition dedicated to advancing abortion rights in Africa.
      <br>
      <br>
      We invite you to accompany us on this journey as we work to create a future in which everyone on the African continent has access to safe and legal abortion care as a matter of course. By working together, we can bring about long-lasting change and make sure that everyone is included in the struggle for reproductive autonomy. This is our tale.
`
  }
]
</script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(195,217,60,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
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
