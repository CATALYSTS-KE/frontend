<template>
  <section
    class="relative pb-10 px-6 md:px-20 bg-[url('@/assets/images/pattern_vector_grey.png')] bg-cover bg-center"
  >
    <div class="p-4">
      <!-- ReusableSvg component -->
      <!-- <RectangleSvg
          fill="#EE3B26"
          width="371"
          height="116"
          viewBox="0 0 371 116"
          :path="path1"
          text="ALLIANCE MEMBERS"
          textFill="white"
          class="font-bold"
        /> -->

      <img src="@/assets/images/catalysts_members.svg" alt="Join as a donor " />
    </div>

    <div
      class="flex md:flex-row flex-wrap justify-center md:justify-between items-center overflowauto"
    >
      <!-- Loop through organizations -->
      <div v-for="item in OrganizationData" :key="item.title" class="px-4 py-2 md:p-4">
        <img
          :src="`/members/${item.image}`"
          alt="Organization"
          class="w-24 md:w-40 h-auto mx-2 my-2"
        />
      </div>
    </div>

    <div
      class="absolute bottom-0 md:left-0 md:right-0 md:px-20 flex md:flex-row md:justify-between"
    >
      <RouterLink to="/contact-us" class="px-4 py-2">
        <!-- <RectangleSvg
          fill="#00C4B3"
          width="450"
          height="116"
          viewBox="0 0 614 116"
          :path="path2"
          text="JOIN AS A DONOR"
          textFill="white"
          class=""
        /> -->
        <img src="@/assets/images/join_as_donor.svg" alt="Join as a donor" />
      </RouterLink>

      <RouterLink to="/contact-us" class="px-4 py-2">
        <img
          src="@/assets/images/join_catalysts.svg"
          alt="Join Catalysts"
          class="hidden md:block"
        />
        <img
          src="@/assets/images/join_catalysts_sm.svg"
          alt="Join Catalysts"
          class="block md:hidden"
        />
      </RouterLink>
    </div>
  </section>
</template>
<script setup>
const OrganizationData = [
  {
    title: 'Figo',
    image: 'figo_logo.png'
  },
  {
    title: 'Center For Reproductive Rights Africa',
    image: 'crr_logo.jpeg'
  },
  {
    title: 'IPAS',
    image: 'IPAS_Logo_RGB_sm.webp'
  },
  {
    title: 'IPPFAR',
    image: 'IPPFAR_logo.jpeg'
  },
  {
    title: 'Population Council',
    image: 'Pop_Council_logo.png'
  }
]
</script>
