<script lang="ts" setup>
import type { SVGVariant } from 'nuxt-qrcode'

import { Code } from '#shared/constants/code/nuxt-qrcode/composable.code'

definePageMeta({
  parent: '/',
})

const { t } = useI18n({
  useScope: 'local',
})

// When encoding QRCode images to base64, the `blackColor` and `whiteColor` will default to `#000` and `#FFF` respectively, ignoring those set in the `nuxt.config.ts` file.
// You can override this by passing the `blackColor` and `whiteColor` options to the composable.
const qrcodeDefault = useQrcode('https://nuxt.com', {
  toBase64: true,
})

const data = ref('https://nuxt.com')
const variant = ref<SVGVariant>('default')
const radius = ref(1)
const qrcodeVariant = useQrcode(data, {
  toBase64: true,
  variant,
  radius,
})
</script>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <H level="2">
        {{ t('result.title') }}
      </H>
      <section>
        <H level="3">
          {{ t('result.default') }}
        </H>
        <div>
          <img :src="qrcodeDefault" width="200" height="200">
        </div>
      </section>
      <section>
        <H level="3">
          {{ t('result.variant') }}
        </H>
        <ElSelect v-model="variant" mb-4>
          <ElOption label="Default" value="default" />
          <ElOption label="Dots" value="dots" />
          <ElOption label="Rounded" value="rounded" />
          <ElOption label="Pixelated" value="pixelated" />
          <ElOption label="Circle" value="circle" />
        </ElSelect>
        <ElSwitch v-model="radius" :active-text="t('radius-on')" :active-value="1" :inactive-text="t('radius-off')" :inactive-value="0" label="Radius" mb-4 />
        <div>
          <img :src="qrcodeVariant" width="200" height="200">
        </div>
      </section>
    </section>
    <section>
      <H level="2">
        <i>app/pages/nuxt-qrcode/composable.vue</i>
      </H>
      <ShikiJs :code="Code.page" lang="vue" />
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
  title: Nuxt QRCode Composable Usage
  back-home: "{'<'} Back to home page {'>'}"
  result:
    title: Result
    default: Default
    variant: Variant
  radius-on: Radius On
  radius-off: Radius Off

zh-CN:
  title: Nuxt QRCode Composable 用法
  back-home: "{'<'} 返回首页 {'>'}"
  result:
    title: 结果
    default: 默认
    variant: 变体
  radius-on: 圆角开启
  radius-off: 圆角关闭

zh-TW:
  title: Nuxt QRCode Composable 用法
  back-home: "{'<'} 返回首頁 {'>'}"
  result:
    title: 結果
    default: 預設
    variant: 變體
  radius-on: 圓角開啟
  radius-off: 圓角關閉
</i18n>
