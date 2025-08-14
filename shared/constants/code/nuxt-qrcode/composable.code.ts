export const Code = {
  page:
`<script lang="ts" setup>
import type { SVGVariant } from 'nuxt-qrcode'

const { t } = useI18n({
  useScope: 'local',
})

// When encoding QRCode images to base64, the \`blackColor\` and \`whiteColor\` will default to \`#000\` and \`#FFF\` respectively, ignoring those set in the \`nuxt.config.ts\` file. // [!code focus:14]
// You can override this by passing the \`blackColor\` and \`whiteColor\` options to the composable.
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
    <section>
      <H level="3">
        {{ t('result.default') }}
      </H>
      <div>
        <img :src="qrcodeDefault" width="200" height="200"> // [!code focus]
      </div>
    </section>
    <section>
      <H level="3">
        {{ t('result.variant') }}
      </H>
      <ElSelect v-model="variant" mb-4> // [!code focus:11]
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
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    default: Default
    variant: Variant
  radius-on: Radius On
  radius-off: Radius Off

zh-CN:
  result:
    default: 默认
    variant: 变体
  radius-on: 圆角开启
  radius-off: 圆角关闭

zh-TW:
  result:
    default: 預設
    variant: 變體
  radius-on: 圓角開啟
  radius-off: 圓角關閉
</i18n>`,
}

export default Code
