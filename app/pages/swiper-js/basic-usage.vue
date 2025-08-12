<script lang="ts" setup>
import { Code } from '#shared/constants/code/swiper-js/basic-usage.code'

const { t } = useI18n({
  useScope: 'local',
})

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
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        app/pages/swiper-js/basic-usage.vue
      </H>
      <ShikiJs :code="Code.page" lang="ts" />
    </section>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <!-- You should use client only to avoid hydration error -->
      <ClientOnly>
        <!-- These components are the web components provided by Swiper.js -->
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
    </section>
    <section>
      <NuxtLinkLocale to="/">
        <span>{{ t('back-home') }}</span>
      </NuxtLinkLocale>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Swiper.js Basic Usage
  result:
    title: Result
  back-home: "{'<'} Back to home page {'>'}"

zh-CN:
  title: Swiper.js 基本用法
  result:
    title: 结果
  back-home: "{'<'} 返回首页 {'>'}"

zh-TW:
  title: Swiper.js 基本用法
  result:
    title: 結果
  back-home: "{'<'} 返回首頁 {'>'}"
</i18n>

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
</style>
