<template>
  <form
    @submit.prevent="submitForm"
    class="md:w-1/2 bg-white p-6 md:p-12 drop-shadow-2xl rounded-lg"
  >
    <div v-if="showSuccess === false" class="flex flex-col justify-center">
      <div class="mb-6">
        <label for="join-type" class="block text-sm font-bold text-gray-700">Join Catalysts</label>
        <select
          id="join-type"
          name="join-type"
          v-model="joinType"
          class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="member">Join as Individual</option>
          <option value="organisation">Join as Organisation</option>
          <option value="donor">Join as Donor</option>
        </select>
      </div>

      <!-- Member Fields -->
      <div v-if="joinType === 'member'">
        <div class="mb-6">
          <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="full-name"
            name="full-name"
            v-model="form.fullName"
            type="text"
            class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g. Jane Doe"
            required
          />
        </div>

        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            name="email"
            v-model="form.email"
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
            v-model="form.phoneNumber"
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
            v-model="form.organisationName"
            class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g. Catalyst Org"
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
            v-model="form.primaryContactEmail"
            class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g. organisation.com"
            required
          />
        </div>

        <div class="py-4">
          <button @click="openLogoUpload" id="upload_widget" class="cloudinary-button">
            Upload Logo
          </button>
          <div v-if="logoUrl" class="py-2">
            <h4 class="font-bold">Uploaded Logo:</h4>
            <img :src="logoUrl" alt="Uploaded Logo" class="uploaded-logo" />
            <button
              @click="deleteLogo"
              class="delete-logo-button bg-red-400 p-2 my-2 rounded-md text-white"
            >
              Delete Logo
            </button>
          </div>
        </div>
      </div>

      <!-- Donor Fields -->
      <div v-if="joinType === 'donor'">
        <div class="mb-6">
          <label for="donor-name" class="block text-sm font-medium text-gray-700">Donor Name</label>
          <input
            id="donor-name"
            name="donor-name"
            v-model="form.donorName"
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
            v-model="form.message"
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
            v-model="form.primaryContactEmail"
            type="email"
            class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g. johnsmith@gmail.com"
            required
          />
        </div>
      </div>

      <div class="pb-6" v-if="joinType">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          rows="4"
          class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Write your message here"
          required
        ></textarea>
      </div>

      <div>
        <div class="mb-2">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="agreeToPolicy"
              class="form-checkbox text-orange-primary"
              required
            />
            <span class="ml-2 text-gray-700">
              I agree to the
              <a href="/privacy-policy" class="text-blue-500">Privacy Policy</a>
            </span>
          </label>
        </div>
        <div class="pb-2">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="agreeToMsgs"
              class="form-checkbox text-orange-primary"
              required
            />
            <span class="ml-2 text-gray-700">
              I agree to sign up to the CATALYSTS newsletter and receive CATALYSTS update messages.
            </span>
          </label>
        </div>

        <div v-if="joinType === 'organisation'" class="pb-2">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="agreeToLogo"
              class="form-checkbox text-orange-primary"
              required
            />
            <span class="ml-2 text-gray-700">
              By submitting this form, I agree to CATALYSTS using my logo for website purposes.
            </span>
          </label>
        </div>
      </div>

      <!-- Submit -->
      <div class="text-left">
        <button
          type="submit"
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
      agreeToMsgs: false,
      agreeToLogo: false,
      showSuccess: false,
      logoUrl: ''
    }
  },
  computed: {
    isFormValid() {
      if (!this.agreeToPolicy) return false
      if (this.joinType === 'member') {
        return this.form.fullName && this.form.email && this.form.phoneNumber && this.form.message
      } else if (this.joinType === 'organisation') {
        return this.form.organisationName && this.form.primaryContactEmail && this.form.message
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
        subject = 'New Individual Sign Up'
        text = `
            Full Name: ${this.form.fullName}\n
            Email: ${this.form.email}\n
            Phone Number: ${this.form.phoneNumber}\n
            Message: ${this.form.message}\n
            Receive NewsLetter: ${this.agreeToMsgs}\n
          `
      } else if (this.joinType === 'organisation') {
        subject = 'New Organisation Sign Up'
        text = `
            Organisation Name: ${this.form.organisationName}\n
            Primary Contact Email: ${this.form.primaryContactEmail}\n
            Logo: ${this.logoUrl}\n
            Message: ${this.form.message}\n
            Receive NewsLetter: ${this.agreeToMsgs}\n
          `
      } else if (this.joinType === 'donor') {
        subject = 'New Donor Sign Up'
        text = `
            Donor Name: ${this.form.donorName}\n
            Primary Contact Name: ${this.form.primaryContactName}\n
            Primary Contact Email: ${this.form.primaryContactEmail}\n
            Message: ${this.form.message}\n
            Receive NewsLetter: ${this.agreeToMsgs}\n
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
        this.agreeToMsgs = false
        this.agreeToLogo = false
        this.showSuccess = true
      } else {
        console.log('Failed to submit form.')
      }
    },

    openLogoUpload() {
      // if (
      //   this.joinType === 'organisation' &&
      //   (!this.form.organisationName || !this.form.primaryContactEmail)
      // ) {
      //   // alert('Please fill in all required fields before uploading the logo.')
      //   return
      // }
      if (!window.cloudinary) {
        console.error('Cloudinary script not loaded')
        return
      }

      const cloudinaryWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: 'djgy5qzmy',
          uploadPreset: 'mrb23fxn',
          sources: ['local', 'url', 'camera'],
          multiple: false,
          maxFileSize: 5000000, // 5MB
          resourceType: 'image',
          theme: 'minimal'
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            this.logoUrl = result.info.secure_url
            console.log('Uploaded image URL:', result.info.secure_url)
          }
        }
      )

      cloudinaryWidget.open()
    },

    deleteLogo() {
      this.logoUrl = ''
    }
  }
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
