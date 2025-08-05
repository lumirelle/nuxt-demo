<script setup lang="ts">
export interface JSConfettiApi {
  JSConfetti: {
    new (): {
      addConfetti: (options?: { emojis: string[] }) => void
    }
  }
}

declare global {
  interface Window extends JSConfettiApi {}
}

const mouseOverEl = ref<HTMLElement | null>(null)

const { onLoaded } = useScriptNpm({
  packageName: 'js-confetti',
  file: 'dist/js-confetti.browser.js',
  version: '0.12.0',
  scriptOptions: {
    // Tell useScript how to resolve the third-party script
    // The returned object will be passed to the onLoaded callback
    use() {
      return { JSConfetti: window.JSConfetti }
    },
    trigger: useScriptTriggerElement({ trigger: 'mouseover', el: mouseOverEl }),
  },
})

onLoaded(({ JSConfetti }) => {
  const confetti = new JSConfetti()
  confetti.addConfetti({ emojis: ['L', 'O', 'A', 'D', 'E', 'D'] })
})

function refresh() {
  window.location.reload()
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="yaml">
en:
  title: "{'@nuxt/scripts - Load script on demand'}"
  trigger: Trigger the script loading manually by hovering over this sentence.
  loaded: After the script is loaded, the confetti will be triggered and output 'LOADED'.
  refresh: You can also refresh this page to see the script is loaded again.
  refreshButton: Refresh this page
  note: 'Note: This script is loaded from npm, you can also loaded from CDN by using {code}'
  code: useScript
  back: "{'Back to try @nuxt/scripts'}"
zh-CN:
  title: "{'@nuxt/scripts - 按需加载脚本'}"
  trigger: 手动触发脚本加载，将鼠标悬停在此句子上。
  loaded: 脚本加载后，会触发烟花效果并输出 'LOADED'。
  refresh: 您也可以刷新此页面，以查看脚本是否再次加载。
  refreshButton: 刷新此页面
  note: 注意：此脚本从 npm 加载，您也可以使用 {code} 从 CDN 加载。
  code: useScript
  back: "{'返回尝试 @nuxt/scripts'}"
zh-TW:
  title: "{'@nuxt/scripts - 按需加載腳本'}"
  trigger: 手動觸發腳本加載，將鼠標懸停在此句子上。
  loaded: 腳本加載後，會觸發煙花效果並輸出 'LOADED'。
  refresh: 您也可以刷新此頁面，以查看腳本是否再次加載。
  refreshButton: 刷新此頁面
  note: 注意：此腳本從 npm 加載，您也可以使用 {code} 從 CDN 加載。
  code: useScript
  back: "{'返回嘗試 @nuxt/scripts'}"
</i18n>

<template>
  <div>
    <MyH level="1">
      {{ t('title') }}
    </MyH>
    <p><span ref="mouseOverEl" hover="text-red">{{ t('trigger') }}</span></p>
    <p>{{ t('loaded') }}</p>
    <p>{{ t('refresh') }}</p>
    <ElButton @click="refresh">
      {{ t('refreshButton') }}
    </ElButton>
    <i18nT keypath="note" tag="p" :values="{ code: t('code') }" />
    <p>
      <NuxtLinkLocale to="/nuxt-scripts">
        <span>{{ t('back') }}</span>
      </NuxtLinkLocale>
    </p>
  </div>
</template>
