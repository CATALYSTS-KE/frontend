<template>
  <main class="bg-yellow-primary min-h-screen">
    <section
      class="pb-10 px-20 bg-[url('@/assets/images/pattern_vector.svg')] bg-cover bg-center relative overflow-hidden"
    >
      <div>
        <ContactForm />
      </div>
    </section>
  </main>
</template>
<script setup>
import ContactForm from '@/components/contact/ContactUsForm.vue'
</script>

<style scoped>
/* Container holding the text */
</style>
