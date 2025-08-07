<!-- This is a component demo for highlighting code. -->

<!-- eslint-disable perfectionist/sort-imports -->
<script setup lang="ts">
import hljs from 'highlight.js/lib/core'

import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import python from 'highlight.js/lib/languages/python'
// Just import the language you need above

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
hljs.registerLanguage('python', python)
// Just register the language you need above

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
  <!-- This style is combined with `github.min.css` & `github-dark.min.css` -->
  <link rel="stylesheet" href="/styles/github.min.css">
  <Render />
</template>
