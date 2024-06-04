<template>
  <section
    class="relative pb-14 md:pb-24 px-6 md:px-20 bg-[url('@/assets/images/pattern_vector_grey.png')] bg-cover bg-center"
  >
    <div class="p-4">
      <img
        src="@/assets/images/catalysts_members_lg.svg"
        alt="Catalysts Members"
        class="hidden md:block"
      />
      <img
        src="@/assets/images/catalysts_members.svg"
        alt="Catalysts Members"
        class="block md:hidden"
      />
    </div>

    <div
      class="flex flex-wrap justify-start md:space-x-6 space-y-4 md:justify-evenly items-center overflow-auto"
    >
      <!-- Loop through organizations -->
      <div v-for="item in OrganizationData" :key="item.title" class="px-4 py-2 md:px-2">
        <div class="w-36 md:w-64">
          <img :src="`/members/${item.image}`" alt="Organization" class="w-full" />
        </div>
      </div>
    </div>
  </section>
  <div class="bg-yellow-primary min-h-screen">
    <section
      class="pb-10 md:px-20 bg-[url('@/assets/images/pattern_vector.svg')] bg-cover bg-center relative"
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
