<template>
  <main class="">
    <!-- Introduction  -->
    <section>
      <div class="px-4 py-4 mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <div class="text-center">
          <p class="text-base md:text-2xl font-bold leading-7">Get In Touch With Us</p>
          <div class="mt-2.5 h-1 w-44 bg-orange-primary mx-auto"></div>
        </div>
      </div>
    </section>
    <!-- Cols 2 -->
    <section>
      <div class="bg-white md:p-6 p-3 drop-shadow-2xl rounded-lg">
          <div class="flex justify-center items-center">
            <div role="" class="grid gap-6 md:grid-cols-2 text-xs">
              <div class="pb-4 md:pb-36 flex flex-col justify-between">
                <div class="flex justify-center">
                  <img
                    class="w-full h-80"
                    alt="contact page dubai image"
                    src="@/assets/images/contact/Dubai-image.webp"
                  />
                </div>
                <div class="px-4 md:px">
                  <p class="font-semibold pt-10 pb-3 md:pb-6 mb-4 text-base md:text-lg leading-6">
                    Need help? Want to Join Us? 
                    <br> We exist to serve you with the purpose of providing you
                    with information. 
                    <br> For any query, please contact us:
                  </p>
                  <div class="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <div class="md:pr-4">
                      <img class="" alt="phone icon" src="@/assets/images/contact/Phone-Icon.jpg" />
                    </div>
                    <div class="text-base md:text-xl md:leading-9">
                      <p class="font-bold">Call Anytime</p>
                      <p class="font-normal">+254 701 234 567</p>
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <div class="md:pr-4">
                      <img src="@/assets/images/contact/Email-Icon.jpg" alt="email icon" />
                    </div>
                    <div class="text-base md:text-xl md:leading-9">
                      <p class="font-bold">Send Email</p>
                      <p class="font-normal">info@catalystsafrica.org</p>
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <div class="md:pr-4">
                      <img src="@/assets/images/contact/Location-Icon.jpg" alt="location icon" />
                    </div>
                    <div class="text-base md:text-xl md:leading-9">
                      <p class="font-bold">Visit Office</p>
                      <div class="mapouter py-">
                        <div class="gmap_canvas">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127643.87802785063!2d36.78208!3d-1.2484608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1715372096413!5m2!1sen!2ske" 
                            width="400" 
                            height="250" 
                            style="border:0;" allowfullscreen="" loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                          </iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form Section -->
              <div class="bg-white md:p-8 p-4 drop-shadow-2xl rounded-lg">
                <div class="container flex flex-col justify-center pt-36 h-screen">
                  <div class="p-3"> 
                    <label for="Full Name" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <div class="mt-3">
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
                  <div class="p-4"> 
                    <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                    <div class="mt-3">
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
                  <div class="p-4"> 
                    <label for="Phone Number" class="block text-sm font-medium text-gray-700"
                      >Phone Number</label
                    >
                    <div class="mt-3">
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
                  <div class="p-4"> 
                    <label for="Message" class="block text-sm font-medium text-gray-700">Message</label>
                    <div class="mt-3">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        class="block w-full md:h-200px rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                  </div>

                  <div class="text-left px-4 pt-6 md:pt-6">
                    <button
                      type="button"
                      aria-label="Submit"
                      class="h-[40px] px-6 font-bold text-sm md:text-base text-white bg-orange-primary inline-flex items-center justify-center rounded-lg hover:bg-secondary transition-all ease-linear duration-500"
                    >
                      <span class="">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  </main>
</template>
