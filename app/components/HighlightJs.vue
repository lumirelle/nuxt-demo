<!-- This is a component demo for highlighting code. -->

<!-- eslint-disable perfectionist/sort-imports -->
<script setup lang="ts">
import hljs from 'highlight.js/lib/core'

import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import python from 'highlight.js/lib/languages/python'
// Just import the language you need above

hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
// Just register the language you need above

// eslint-disable-next-line import/first
import HighlightJSVue from '@highlightjs/vue-plugin'

// eslint-disable-next-line vue/define-macros-order
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: '',
  },
  autodetect: {
    type: Boolean,
    default: true,
  },
  ignoreIllegals: {
    type: Boolean,
    default: true,
  },
})

function Render() {
  return h(
    HighlightJSVue.component,
    {
      language: props.language,
      code: props.code,
      autodetect: props.autodetect,
      ignoreIllegals: props.ignoreIllegals,
    },
  )
}
</script>

<template>
  <!-- This style is combined with `github.min.css` & `github-dark.min.css` -->
  <link rel="stylesheet" href="/styles/highlight-js/github.min.css">
  <Render />
</template>
