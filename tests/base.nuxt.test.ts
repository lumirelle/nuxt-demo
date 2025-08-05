// This test is working with nuxt environment
// It will start a nuxt server and then run the test

import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('my nuxt test', async () => {
  await setup({
  })

  it('should work', async () => {
    // This will fetch the page content (html) from the server
    const page = await $fetch('/')
    expect(page).toContain('Welcome to Nuxt 4')
  })
})
