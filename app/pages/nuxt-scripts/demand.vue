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
</script>

<template>
  <div>
    <h1>@nuxt/scripts - Load script on demand</h1>
    <p><span ref="mouseOverEl" class="trigger">Trigger the script loading manually by hovering over this sentence.</span></p>
    <p>After the script is loaded, the confetti will be triggered and output "LOADED".</p>
    <p>You can also refresh this page to see the script is loaded again.</p>
    <button @click="refresh">
      Refresh this page
    </button>
    <p>Note: This script is loaded from npm, you can also loaded from CDN by using <code>useScript</code></p>
    <p>
      <NuxtLink to="/">
        Back to home
      </NuxtLink>
    </p>
  </div>
</template>

<style lang="css" scoped>
.trigger:hover {
  color: red;
}

code {
  background-color: #f0f0f0;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>
