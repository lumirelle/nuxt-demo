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

function handleClick() {
  // Using JSConfetti, which is loaded globally in `nuxt.config.ts`
  // We can access it from the window object
  const confetti = new window.JSConfetti()
  confetti.addConfetti({ emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'] })
}
</script>

<template>
  <div>
    <MyH level="1">
      @nuxt/scripts - Using global script
    </MyH>
    <p>This script is loaded globally in `nuxt.config.ts`</p>
    <p>You can open the Network tab in the devtools of browser to see the script is loaded.</p>
    <p>Please choose all requests and filter by name "js-confetti".</p>
    <ElButton @click="handleClick">
      Click me to trigger confetti
    </ElButton>
    <p>
      <NuxtLink to="/nuxt-scripts">
        <span>Back to try @nuxt/scripts</span>
      </NuxtLink>
    </p>
  </div>
</template>
