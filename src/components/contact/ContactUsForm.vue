<template>
  <main class="">
    <!-- Introduction  -->
    <section>
      <div class="px-4 md:px-8 py-4 mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <div class="text-center">
          <p class="text-center text-base md:text-2xl font-bold leading-7">Get In Touch With Us</p>
          <div class="mt-2.5 h-1 w-44 bg-orange-primary mx-auto"></div>
        </div>
      </div>
    </section>
    <!-- Cols 2 -->
    <section>
      <div class="px-4 md:px-8 py-7 mx-auto max-w-screen-xl 2xl:max-w-screen-2xl bg-white">
        <div role="" class="grid gap-6 md:grid-cols-2 text-xs">
          <div class="pb-4 md:pb-36">
            <div>
              <img
                class="w-full"
                alt="contact page dubai image"
                src="@/assets/images/contact/Dubai-image.webp"
              />
            </div>
            <p class="font-semibold pt-7 pb-3.5 md:pb-9 mb-4 text-base md:text-lg leading-6">
              Need help? Want to Join Us? We exist to serve you with the purpose of providing you
              with information. For any query, please contact us:
            </p>
            <div class="flex">
              <div>
                <img class="" alt="phone icon" src="@/assets/images/contact/Phone-Icon.jpg" />
                <!-- <img class="md:hidden"src="@/assets/images/contact/Phone-Icon.jpg" alt=""> -->
              </div>
              <div class="pl-8 md:pl-7 text-base md:text-xl md:leading-9">
                <p class="font-bold">Call Anytime</p>
                <p class="font-normal">+254 701 234 567</p>
              </div>
            </div>
            <div class="flex pt-5">
              <div>
                <img src="@/assets/images/contact/Email-Icon.jpg" alt="email icon" />
              </div>
              <div class="pl-8 md:pl-7 text-base md:text-xl md:leading-9">
                <p class="font-bold">Send Email</p>
                <p class="font-normal">info@catalystsafrica.org</p>
              </div>
            </div>
            <div class="flex pt-5">
              <div>
                <img src="@/assets/images/contact/Location-Icon.jpg" alt="location icon" />
              </div>
              <div class="pl-8 md:pl-7 text-base md:text-xl md:leading-9">
                <p class="font-bold">Visit Office</p>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      class="gmap_iframe"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Nairobi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Section -->
          <div class="bg-white md:p-8 p-4 drop-shadow-2xl">
            <!-- container -->
            <div class="pt-5">
              <label for="Full Name" class="block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <div class="mt-1.5">
                <input
                  id="Full Name"
                  name="Full Name"
                  type="Full Name"
                  autocomplete="Full Name"
                  class="block w-full md:h-50px rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g. Jane Doe"
                />
              </div>
            </div>
            <div class="pt-5">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email Address</label
              >
              <div class="mt-1.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full md:h-50px rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g. janedoe@gmail.com"
                />
              </div>
            </div>
            <div class="pt-5">
              <label for="Phone Number" class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <div class="mt-1.5">
                <input
                  id="Phone Number"
                  name="Phone Number"
                  type="Phone Number"
                  autocomplete="Phone Number"
                  class="block w-full md:h-50px rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g. 0701234567"
                />
              </div>
            </div>
            <div class="pt-5">
              <label for="Message" class="block text-sm font-medium text-gray-700">Message</label>
              <div class="mt-1.5">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="block w-full md:h-96px rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
            </div>

            <div class="text-left pt-8 md:pt-12">
              <button
                type="button"
                aria-label="Submit"
                class="h-[45px] px-8 font-bold text-sm md:text-base text-white bg-orange-primary inline-flex items-center justify-center rounded-lg hover:bg-secondary transition-all ease-linear duration-500"
              >
                <span class="">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
