<script setup lang="ts">
import Code from '~/constants/nuxt-scripts/global.code'

function handleClick() {
  // Using JSConfetti, which is loaded globally in `nuxt.config.ts`
  // We can access it from the window object
  const confetti = new window.JSConfetti()
  confetti.addConfetti({ emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'] })
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@nuxt/scripts - Using global script'}"
  p1: This script is loaded globally in `nuxt.config.ts`
  p2: You can open the Network tab in the devtools of browser to see the script is loaded.
  p3: Please choose all requests and filter by name 'js-confetti'.
  button: Click me to trigger confetti
  back: "{'Back to try @nuxt/scripts'}"
zh-CN:
  title: "{'@nuxt/scripts - 使用全局脚本'}"
  p1: 此脚本在 `nuxt.config.ts` 中全局加载
  p2: 您可以打开浏览器开发者工具的网络标签，查看脚本是否加载。
  p3: 请选择所有请求，并过滤名为 'js-confetti' 的请求。
  button: 点击我触发烟花效果
  back: "{'返回尝试 @nuxt/scripts'}"
zh-TW:
  title: "{'@nuxt/scripts - 使用全局腳本'}"
  p1: 此腳本在 `nuxt.config.ts` 中全局加載
  p2: 您可以打開瀏覽器開發者工具的網絡標籤，查看腳本是否加載。
  p3: 請選擇所有請求，並過濾名為 'js-confetti' 的請求。
  button: 點擊我觸發煙花效果
  back: "{'返回嘗試 @nuxt/scripts'}"
</i18n>

<template>
  <div>
    <H level="1">
      {{ t('title') }}
    </H>
    <section>
      <p>{{ t('p1') }}</p>
      <p>{{ t('p2') }}</p>
      <p>{{ t('p3') }}</p>
    </section>
    <section>
      <HighlightJs :code="Code.global" />
    </section>
    <section>
      <ElButton @click="handleClick">
        {{ t('button') }}
      </ElButton>
    </section>
    <section>
      <p>
        <NuxtLinkLocale to="/nuxt-scripts">
          <span>{{ t('back') }}</span>
        </NuxtLinkLocale>
      </p>
    </section>
  </div>
</template>
