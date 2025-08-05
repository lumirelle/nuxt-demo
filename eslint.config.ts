// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

/* Should wrap with `withNuxt` */
export default withNuxt(
  /* Your custom rules here */
  antfu({
    formatters: true,
  }),
)
