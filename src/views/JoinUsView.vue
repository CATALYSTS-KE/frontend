<template>
  <section
    class="relative pb-14 md:pb-24 px-6 md:px-20 bg-[url('@/assets/images/pattern_vector_grey.png')] bg-cover bg-center"
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

      <img src="@/assets/images/catalysts_members.svg" alt="Catalysts Members" />
    </div>

    <div
      class="flex md:flex-row flex-wrap justify-start md:space-x-6 space-y-4 md:justify-evenly items-center overflow-auto"
    >
      <!-- Loop through organizations -->
      <div v-for="item in OrganizationData" :key="item.title" class="px-4 py-2 md:px-0">
        <div class="w-36 md:w-60">
          <img :src="`/members/${item.image}`" alt="Organization" class="w-full" />
        </div>
      </div>
    </div>
  </section>
  <div class="bg-yellow-primary min-h-screen">
    <section
      class="pb-10 px-20 bg-[url('@/assets/images/pattern_vector.svg')] bg-cover bg-center relative"
    >
      <ContactForm />
    </section>
  </div>
</template>
<script setup>
import ContactForm from '@/components/contact/ContactUsForm.vue'
const OrganizationData = [
  {
    title: 'Figo',
    image: 'figo_logo.png'
  },
  {
    title: 'Center For Reproductive Rights Africa',
    image: 'CRR.png'
  },
  {
    title: 'IPPFAR',
    image: 'IPPFAR_logo.png'
  },
  {
    title: 'Population Council',
    image: 'Pop_Council_logo.png'
  },
  {
    title: 'IPAS',
    image: 'IPAS_Logo_RGB.png'
  }
]
</script>
