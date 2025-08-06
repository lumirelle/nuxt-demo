<!-- This is a component demo for highlighting code. -->

<!-- eslint-disable perfectionist/sort-imports -->
<script setup lang="ts">
import hljs from 'highlight.js/lib/core'

import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/github.css'

import HighlightJSVue from '@highlightjs/vue-plugin'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: '',
  },
  autoDetect: {
    type: Boolean,
    default: true,
  },
  ignoreIllegals: {
    type: Boolean,
    default: true,
  },
})

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)

function Render() {
  return h(
    HighlightJSVue.component,
    {
      language: props.language,
      code: props.code,
      autoDetect: props.autoDetect,
      ignoreIllegals: props.ignoreIllegals,
    },
  )
}
</script>

<template>
  <div relative>
    <Render />
  </div>
</template>
