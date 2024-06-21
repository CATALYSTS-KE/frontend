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
import { sendEmail } from '../common/emailService'
import ContactSection from './ContactSection.vue'
import InteractiveContact from './InteractiveContact.vue'

export default {
  components: {
    ContactSection,
    InteractiveContact
  },
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
        `
      } else if (this.joinType === 'organisation') {
        subject = 'New Organisation Sign Up'
        text = `
          Organisation Name: ${this.form.organisationName}\n
          Primary Contact Name: ${this.form.primaryContactName}\n
          Primary Contact Email: ${this.form.primaryContactEmail}\n
          Logo: ${this.logoUrl}\n
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
