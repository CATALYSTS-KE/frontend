<template>
  <main class="">
    <!-- Introduction  -->
    <section>
      <div class="px-4 md:px-0 py-2 md:py-8 mx-auto">
        <div class="text-center absolute top-0 transform -translate-y-10">
          <img
            src="@/assets/images/join_catalysts_lg.svg"
            alt="Join Catalysts"
            class="hidden md:block"
          />
        </div>
        <div class="text-center absolute top-0 transform -translate-x-0.5 -translate-y-6">
          <img
            src="@/assets/images/join_catalysts_sm.svg"
            alt="Join Catalysts"
            class="block md:hidden"
          />
        </div>
      </div>
    </section>
    <!-- Cols 2 -->
    <section class="pt-12">
      <div class="bg-white p-6 md:px-4 drop-shadow-2xl rounded-lg">
        <div class="flex flex-col md:flex-row justify-center">
          <div class="md:w-1/2 md:mb-0 md:pr-8">
            <InteractiveContact />
            <div class="px-4">
              <p class="font-semibold pt-6 md:pt-10 md:mb-4 text-base md:text-lg leading-6">
                For any query, please contact us:-
                <br />
              </p>
              <div class="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div class="md:pr-4 mb-2 md:mb-0">
                  <img src="@/assets/images/contact/Email-Icon.jpg" alt="email icon" />
                </div>
                <div class="text-base md:text-xl">
                  <p class="font-bold">For enquiries, reach out to us on:</p>
                  <p class="font-normal">info@catalystsafrica.org</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Section -->
          <ContactSection />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import ContactSection from './ContactSection.vue'
import InteractiveContact from './InteractiveContact.vue'

export default {
  components: {
    ContactSection,
    InteractiveContact
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.cloudinary-button {
  background-color: #00c4b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.cloudinary-button:hover {
  background-color: #4caf50;
}

.uploaded-logo {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}
.custom-checkbox {
  width: 20px; /* Adjust the size as needed */
  height: 20px; /* Adjust the size as needed */
}
</style>
