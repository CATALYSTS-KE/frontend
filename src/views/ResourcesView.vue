<template>
  <div>
    <main>
      <section
        class="pb-10 px-20 bg-[url('@/assets/images/pattern_green.png')] bg-cover bg-center relative overflow-hidden"
      >
        <div>
          <RectangleSvg
            fill="#EE3B26"
            width="494"
            height="117"
            viewBox="0 0 494 117"
            :path="path1"
            text="research"
            textFill="white"
            :uppercase="false"
            class=""
          />
          <!-- research items -->
          <div>
            <!-- placeholder for one research item -->
            <div>
              <h1>Overview of abortion laws by county in Africa</h1>
              <p>Lorem Ipsum pargrapgh</p>
              <div>
                <button>DOWNLOAD</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import RectangleSvg from '@/components/common/RectangleSvg.vue'
const path1 = 'M486.471 12.5201V92.9501L4.80078 106.05V7.82007L486.471 12.5201Z'
</script>
