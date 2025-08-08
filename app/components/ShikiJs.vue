<!-- This is a wrap of `Shiki`, with custom transformers -->

<script lang="ts" setup>
import type { BundledLanguage, CodeToHastOptions } from 'shiki'

import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers'

export type HighlightOptions = Partial<CodeToHastOptions> & {
  /** unwrap pre > code to code */
  unwrap?: boolean
}

const props = defineProps({
  code: String,
  lang: String as PropType<BundledLanguage | 'text' | 'txt' | 'plain'>,
  highlightOptions: Object as PropType<HighlightOptions>,
  as: { type: String, default: 'div' },
  unwrap: { type: Boolean, default: undefined },
  showLineNumber: { type: Boolean, default: true },
})
</script>

<template>
  <Shiki
    :class="{ 'shiki show-line-numbers': props.showLineNumber }"
    :code="props.code"
    :lang="props.lang"
    :as="props.as"
    :unwrap="props.unwrap"
    :highlight-options="{
      ...props.highlightOptions,
      transformers: [
        transformerNotationDiff(),
        transformerNotationFocus(),
        transformerNotationHighlight(),
      ],
    }"
  />
</template>
