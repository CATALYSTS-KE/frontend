<template>
  <div class="min-h-screen">
    <div class="md:pb-14 pb-10 w-full h-full pl-20">
      <img
        src="@/assets/images/research_title.svg"
        alt="Research"
        class="md:block hidden relative"
      />
      <img
        src="@/assets/images/research_title_sm.svg"
        alt="Research"
        class="block md:hidden relative px-4 z-10"
      />
    </div>
    <section class="section-with-background min-h-screen px-4">
      <div v-for="resource in resources" :key="resource.section" class="mb-8">
        <h2
          class="text-2xl text-center text-white text-bold font-bold mb-4 bg-[#EE3B27] p-4 uppercase"
        >
          {{ resource.section }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
          <div
            v-for="item in resource.items"
            :key="item.url"
            :style="{ backgroundColor: item.backgroundColor }"
            class="p-8 rounded-md shadow-md hover:bg-opacity-90 transition duration-300"
          >
            <a
              :href="item.url"
              target="_blank"
              :class="`text-${item.textColor}`"
              class="hover:text-gray-500 uppercase"
            >
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="w-full h-full">
        <img src="@/assets/images/coming_soon.webp" alt="Coming Soon" class="w-full h-full" />
      </div> -->
      <!-- Container -->
      <!-- <div class="px-4 md:px-10 lg:px-20 xl:px-32">
        <div class="md:pb-14 pb-10 w-full h-full">
          <img
            src="@/assets/images/research_title.svg"
            alt="Research"
            class="md:block hidden relative"
          />
          <img
            src="@/assets/images/research_title_sm.svg"
            alt="Research"
            class="block md:hidden relative px-4 z-10"
          />
        </div>
        <div class="p-4 md:p-8 lg:p-14 md:h-[700px] bg-white shadow-md rounded-lg overflow-auto">
          <div v-for="index in 4" :key="index" class="pb-8">
            <div class="flex flex-col md:flex-row">
              <div class="p-4 md:pb-0">
                <h2 class="text-2xl px-4 md:px-12 text-red-primary font-bold">
                  {{ cardData.title }}
                </h2>
                <p
                  class="text-lg font-normal leading-snug px-4 md:px-12 py-6 text-justify mt-2 text-gray-600"
                  v-html="cardData.message"
                ></p>

                <div class="flex items-center justify-between px-4 md:px-14">
                  <button
                    class="bg-blue-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="downloadPDF(cardData)"
                  >
                    DOWNLOAD
                  </button>

                  <button
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    @click="shareItem(cardData)"
                  >
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script setup>
// import { jsPDF } from 'jspdf'

const resources = [
  {
    section: 'GUIDANCE DOCUMENTS and WEBSITES',
    items: [
      {
        title: 'WHO Abortion Care Guidelines (2022)',
        url: 'https://srhr.org/abortioncare/',
        backgroundColor: '#C4D93C',
        textColor: 'black'
      },
      {
        title: 'IPPF Comprehensive Abortion Care Guidelines',
        url: 'https://ippfmaforum.org/2021/10/06/abortion-care-guidelines/',
        backgroundColor: '#00C5B4',
        textColor: 'black'
      },
      {
        title:
          'SafeAccess - Website sharing best practice guidance, news and resources on safe abortion and post-abortion care',
        url: 'https://www.safeaccesshub.org/about/',
        backgroundColor: '#F4A60E',
        textColor: 'white'
      }
    ]
  },
  {
    section: 'TRAINING RESOURCES',
    items: [
      {
        title: 'Online medical abortion course (WHO)',
        url: 'https://lms-staging.lxp.academy.who.int/courses/course-v1:WHOA+0012_MA_EN+2023/about',
        backgroundColor: '#933801',
        textColor: 'white'
      },
      {
        title: 'Mobile app for health care workers providing abortion care (WHO)',
        url: 'https://www.who.int/news/item/07-08-2023-new-mobile-phone-app-helps-healthcare-workers-provide-comprehensive-abortion-care#:~:text=In%20recognition%20of%20this%2C%20the,the%20WHO%20Abortion%20care%20guideline%2C',
        backgroundColor: '#443635',
        textColor: 'white'
      },
      {
        title: 'How to Use online medical abortion training for providers',
        url: 'https://elearning.howtouseabortionpill.org/',
        backgroundColor: '#EE3B27',
        textColor: 'white'
      }
    ]
  },
  {
    section: 'COMMUNICATING and EDUCATING about ABORTION',
    items: [
      {
        title: 'How to Talk about Abortion: A guide to stigma-free messaging (IPPF)',
        url: 'https://www.ippf.org/resource/how-talk-about-abortion-guide-stigma-free-messaging',
        backgroundColor: '#8D7C34',
        textColor: 'white'
      },
      {
        title: 'Women on Web Abortion Framing Toolkit (Women on Web)',
        url: 'https://www.womenonweb.org/en/page/21991/abortion-framing-toolkit',
        backgroundColor: '#F7A901',
        textColor: 'black'
      },
      {
        title:
          'How to Educate about abortion: A guide for peer educators, teachers and trainers (IPPF)',
        url: 'https://www.ippf.org/resource/How-educate-about-abortion-guide-peer-educators-teachers-and-trainers',
        backgroundColor: '#CDDD00'
      }
    ]
  },
  {
    section: 'STIGMA and ATTITUDES',
    items: [
      {
        title: 'VCAT Facilitator Guide for Global Audience (Ipas)',
        url: 'https://www.ipas.org/resource/abortion-values-clarification-for-action-and-transformation-vcat/',
        backgroundColor: '#933801',
        textColor: 'white'
      },
      {
        title: 'VCAT Abortion self-care facilitator’s guide (Ipas)',
        url: 'https://www.ipas.org/resource/abortion-self-care-values-clarification-for-action-and-transformation-workshop-facilitators-guide/',
        backgroundColor: '#EB3D24',
        textColor: 'white'
      },
      {
        title:
          'Abortion attitude transformation: Values clarification activities adapted for young women (Ipas)',
        url: 'https://www.ipas.org/resource/abortion-attitude-transformation-values-clarification-activities-adapted-for-young-women/',
        backgroundColor: '#443737',
        textColor: 'white'
      },
      {
        title: 'Values clarification / VCAT facilitators training (MSI)',
        url: 'https://kayaconnect.org/course/info.php?id=5040',
        backgroundColor: '#C4D93C',
        textColor: 'black'
      },
      {
        title: 'Disability inclusion in reproductive health programs (Ipas)',
        url: 'https://www.ipas.org/resource/disability-inclusion-in-reproductive-health-programs-an-orientation-and-values-clarification-toolkit/',
        backgroundColor: '#00C5B4',
        textColor: 'black'
      },
      {
        title:
          'Abortion Attitude Transformation: A values clarification toolkit for humanitarian audiences (Ipas)',
        url: 'https://www.ipas.org/resource/abortion-attitude-transformation-a-values-clarification-toolkit-for-humanitarian-audiences/',
        backgroundColor: '#F4A60E',
        textColor: 'black'
      }
    ]
  },
  {
    section: 'NEW PUBLICATIONS',
    items: [
      {
        title:
          'Progress toward abortion access and quality care: Examples from across the globe. 2024 (IJGO)',
        url: 'https://obgyn.onlinelibrary.wiley.com/toc/18793479/2024/164/S1',
        backgroundColor: '#8D7C34',
        textColor: 'white'
      },
      {
        title:
          'Domestication of the Maputo Protocol in the Democratic Republic of Congo: Leveraging regional human rights commitments for abortion decriminalization and access 2024 (IJGO)',
        url: 'https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/ijgo.15332',
        backgroundColor: '#CDDD00'
      },
      {
        title:
          "Professional societies of obstetrics and gynecology as agents of change in sexual and reproductive health: FIGO's 10-country safe abortion advocacy project in Africa and Latin America. 2024 (IJGO)",
        url: 'https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/ijgo.15334',
        backgroundColor: '#00C5B4'
      },
      {
        title:
          'Self-Managed Abortion in Africa: The Decriminalization Imperative in Regional Human Rights Standards, 2023, Health Hum Rights',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10309143/',
        backgroundColor: '#F4A60E'
      }
    ]
  }
]

// const downloadPDF = (item) => {
//   // Create a new jsPDF instance
//   let doc = new jsPDF()

//   // Add title and message to the PDF
//   doc.text(item.title, 10, 10)
//   doc.text(item.message, 10, 20)

//   // Save the PDF
//   doc.save(`${item.title}.pdf`)
// }

// const shareItem = (item) => {
// Replace this with your logic to share the item on social media platforms
// For example, you can open a share dialog or navigate to a share URL
// This is just a placeholder
//   const url = window.location.href // Get the current URL
//   alert(`Share this URL: ${url}`)
// }
// // const getWidth = () => {
//   // Adjust width based on viewport size
//   return window.innerWidth < 768 ? '100%' : 482 // Example breakpoint is 768px
// }
// const getHeight = () => {
//   // Adjust height based on viewport size
//   return window.innerWidth < 768 ? 'auto' : 100 // Example breakpoint is 768px
// }
</script>

<style scoped>
/* .section-with-background {
  @apply relative bg-[rgba(195,217,60,1)] bg-[url('@/assets/images/pattern_green.png')] bg-cover bg-center py-12;
} */

::-webkit-scrollbar {
  width: 16px;
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
