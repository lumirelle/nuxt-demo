export const Code = {
  code:
`export const Code = {
  xml:
\`<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>\`,
  javascript:
\`// This is a simple JavaScript code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));\`,
}

export default Code`,
  component:
`<!-- This is a component demo for highlighting code. -->

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
  <!-- This style is combined with \`github.min.css\` & \`github-dark.min.css\` -->
  <link rel="stylesheet" href="/styles/github.min.css">
  <Render />
</template>`,
  page:
`<script setup lang="ts">
import { Code } from '#shared/constants/highlight-js/basic-usage.code'

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>
      {{ t('result.xml') }}
    </p>
    <p>
      <HighlightJs :code="Code.xml" language="xml" />
    </p>
    <p>
      {{ t('result.javascript') }}
    </p>
    <p>
      <HighlightJs :code="Code.javascript" language="javascript" />
    </p>
  </div>
</template>

<i18n lang="yaml">
en:
  result:
    xml: This is an XML code block.
    javascript: This is a JavaScript code block.

zh-CN:
  result:
    xml: "这是一个 XML 代码块。"
    javascript: "这是一个 JavaScript 代码块。"

zh-TW:
  result:
    xml: "這是一個 XML 代碼塊。"
    javascript: "這是一個 JavaScript 代碼塊。"
</i18n>`,
  xml:
`<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`,
  javascript:
`// This is a simple JavaScript code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));`,
}

export default Code
