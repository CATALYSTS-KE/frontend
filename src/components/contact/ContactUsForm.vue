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
        <div class="flex flex-col md:flex-row justify-center md:items-center">
          <div class="md:w-1/2 md:mb-0 md:pr-8">
            <div class="flex justify-center">
              <img
                class="w-full h-auto"
                alt="contact page dubai image"
                src="@/assets/images/contact/contact_us.jpg"
              />
            </div>
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
          <!-- Form Section -->
          <form
            @submit.prevent="submitForm"
            class="md:w-1/2 bg-white p-6 md:p-12 drop-shadow-2xl rounded-lg"
          >
            <div v-if="showSuccess === false" class="flex flex-col justify-center">
              <div class="mb-6">
                <label for="join-type" class="block text-sm font-bold text-gray-700"
                  >Join Catalysts</label
                >
                <select
                  id="join-type"
                  name="join-type"
                  v-model="joinType"
                  class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="member">Join as Member</option>
                  <option value="organisation">Join as Organisation</option>
                  <option value="donor">Join as Donor</option>
                </select>
              </div>

              <!-- Member Fields -->
              <div v-if="joinType === 'member'">
                <div class="mb-6">
                  <label for="full-name" class="block text-sm font-medium text-gray-700"
                    >Full Name</label
                  >
                  <input
                    id="full-name"
                    name="full-name"
                    v-model="fullName"
                    type="text"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. Jane Doe"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label for="email" class="block text-sm font-medium text-gray-700"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    name="email"
                    v-model="email"
                    type="email"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. janedoe@gmail.com"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label for="phone-number" class="block text-sm font-medium text-gray-700"
                    >Phone Number</label
                  >
                  <input
                    id="phone-number"
                    name="phone-number"
                    v-model="phoneNumber"
                    type="text"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. (+254) 701234567"
                    required
                  />
                </div>
              </div>

              <!-- Organisation Fields -->
              <div v-if="joinType === 'organisation'">
                <div class="mb-6">
                  <label for="org-name" class="block text-sm font-medium text-gray-700"
                    >Organisation Name</label
                  >
                  <input
                    id="org-name"
                    name="org-name"
                    type="text"
                    v-model="organisationName"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. Catalyst Org"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label for="primary-contact" class="block text-sm font-medium text-gray-700"
                    >Primary Contact Person</label
                  >
                  <input
                    id="primary-contact"
                    name="primary-contact"
                    type="text"
                    v-model="primaryContactName"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. John Smith"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label for="primary-email" class="block text-sm font-medium text-gray-700"
                    >Primary Contact Email</label
                  >
                  <input
                    id="primary-email"
                    name="primary-email"
                    type="email"
                    v-model="primaryContactEmail"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. organisation.com"
                    required
                  />
                </div>
              </div>

              <!-- Donor Fields -->
              <div v-if="joinType === 'donor'">
                <div class="mb-6">
                  <label for="donor-name" class="block text-sm font-medium text-gray-700"
                    >Donor Name</label
                  >
                  <input
                    id="donor-name"
                    name="donor-name"
                    v-model="donorName"
                    type="text"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. Donor Name"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label for="primary-contact" class="block text-sm font-medium text-gray-700"
                    >Primary Contact Name</label
                  >
                  <input
                    id="primary-contact"
                    v-model="message"
                    name="primary-contact"
                    type="text"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. John Smith"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label for="primary-email" class="block text-sm font-medium text-gray-700"
                    >Primary Contact Email</label
                  >
                  <input
                    id="primary-email"
                    name="primary-email"
                    v-model="primaryContactEmail"
                    type="email"
                    class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. johnsmith@gmail.com"
                    required
                  />
                </div>
              </div>

              <div class="mb-6" v-if="joinType">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  v-model="message"
                  rows="4"
                  class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <div class="mb-6">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    v-model="agreeToPolicy"
                    class="form-checkbox h-5 w-5 text-orange-primary"
                    required
                  />
                  <span class="ml-2 text-gray-700"
                    >I agree to the
                    <a href="/privacy-policy" class="text-blue-500">Privacy Policy</a></span
                  >
                </label>
              </div>

              <div class="text-left">
                <button
                  type="submit"
                  @click="submitForm"
                  class="h-[40px] px-6 font-bold text-sm md:text-base text-white bg-orange-primary inline-flex items-center justify-center rounded-lg hover:bg-secondary transition-all ease-linear duration-500"
                >
                  Submit
                </button>
              </div>
            </div>
            <div v-if="showSuccess === true">
              <p class="py-4 font-bold text-lg">
                Thank You for your submission. You're one step close to being part of the
                <span class="text-orange-primary">CATALYSTS</span>
                Community. We'll be in touch with you soon.
              </p>
              <button
                @click="showSuccess = false"
                class="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Okay
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { sendEmail } from '../common/emailService' // Adjust the path as necessary

export default {
  data() {
    return {
      joinType: 'member',
      form: {
        fullName: '',
        email: '',
        phoneNumber: '',
        organisationName: '',
        primaryContactName: '',
        primaryContactEmail: '',
        donorName: '',
        message: ''
      },
      agreeToPolicy: false,
      showSuccess: false
    }
  },
  computed: {
    isFormValid() {
      if (!this.agreeToPolicy) return false
      if (this.joinType === 'member') {
        return this.form.fullName && this.form.email && this.form.phoneNumber && this.form.message
      } else if (this.joinType === 'organisation') {
        return (
          this.form.organisationName &&
          this.form.primaryContactName &&
          this.form.primaryContactEmail &&
          this.form.message
        )
      } else if (this.joinType === 'donor') {
        return (
          this.form.donorName &&
          this.form.primaryContactName &&
          this.form.primaryContactEmail &&
          this.form.message
        )
      }
      return false
    }
  },
  methods: {
    async submitForm() {
      let subject = `${this.form.fullName || this.form.organisationName || this.form.donorName} Has Joined Catalyst`
      let text = `
        Name: ${this.form.fullName || this.form.organisationName || this.form.donorName}\n
        Email: ${this.form.email || this.form.primaryContactEmail}\n
        Message: ${this.form.message}\n
      `

      if (this.joinType === 'member') {
        subject = 'New Member Sign Up'
        text = `
          Full Name: ${this.form.fullName}\n
          Email: ${this.form.email}\n
          Phone Number: ${this.form.phoneNumber}\n
          Message: ${this.form.message}\n
        `
      } else if (this.joinType === 'organisation') {
        subject = 'New Organisation Sign Up'
        text = `
          Organisation Name: ${this.form.organisationName}\n
          Primary Contact Name: ${this.form.primaryContactName}\n
          Primary Contact Email: ${this.form.primaryContactEmail}\n
          Message: ${this.form.message}\n
        `
      } else if (this.joinType === 'donor') {
        subject = 'New Donor Sign Up'
        text = `
          Donor Name: ${this.form.donorName}\n
          Primary Contact Name: ${this.form.primaryContactName}\n
          Primary Contact Email: ${this.form.primaryContactEmail}\n
          Message: ${this.form.message}\n
        `
      }

      const emailSent = await sendEmail(subject, text)

      if (emailSent) {
        this.form.fullName = ''
        this.form.email = ''
        this.form.phoneNumber = ''
        this.form.organisationName = ''
        this.form.primaryContactName = ''
        this.form.primaryContactEmail = ''
        this.form.donorName = ''
        this.form.message = ''
        this.agreeToPolicy = false
        this.showSuccess = true
      } else {
        console.log('Failed to submit form.')
      }
    }
  }
}
</script>
