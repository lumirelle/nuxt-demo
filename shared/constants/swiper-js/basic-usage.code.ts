export const Code = {
  page:
`<script lang="ts" setup>

// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  if (swiper.instance) {
    ElMessage.info({
      message: 'Swiper instance is available!',
    })
  }
})
</script>

<template>
  <div>
    <!-- You should use client only to avoid hydration error -->
    <!-- These components are the web components provided by Swiper.js -->
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          style="background-color: rgb(32, 233, 70); color: white;"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div mt-4>
      <!-- Go back one slide -->
      <ElButton @click="swiper.prev()">
        Prev
      </ElButton>
      <!-- Go forward one slide -->
      <ElButton @click="swiper.next()">
        Next
      </ElButton>
    </div>
  </div>
</template>

<style>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>`,
}

export default Code
