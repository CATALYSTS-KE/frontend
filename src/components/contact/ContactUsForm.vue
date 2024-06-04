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
          <div class="md:w-1/2 bg-white p-6 md:p-12 drop-shadow-2xl rounded-lg">
            <div class="flex flex-col justify-center">
              <div class="mb-6">
                <label for="full-name" class="block text-sm font-medium text-gray-700"
                  >Full Name</label
                >
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g. Jane Doe"
                />
              </div>
              <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700"
                  >Email Address</label
                >
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g. janedoe@gmail.com"
                />
              </div>
              <div class="mb-6">
                <label for="phone-number" class="block text-sm font-medium text-gray-700"
                  >Phone Number</label
                >
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g. (+254) 701234567"
                />
              </div>
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="mt-2 block w-full rounded-md border border-gray-300 py-2 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div class="text-left">
                <button
                  type="button"
                  class="h-[40px] px-6 font-bold text-sm md:text-base text-white bg-orange-primary inline-flex items-center justify-center rounded-lg hover:bg-secondary transition-all ease-linear duration-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
