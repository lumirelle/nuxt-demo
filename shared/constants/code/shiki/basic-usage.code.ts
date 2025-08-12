export const Code = {
  config:
`export default defineNuxtConfig({

  // ...

  shiki: {
    bundledThemes: [
      'vitesse-light',
      'vitesse-dark',
    ],
    defaultTheme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    bundledLangs: [
      'vue',
      'html',
      'xml',
      'js',
      'ts',
      'css',
      'scss',
      'json',
      'yaml',
    ],
    // Do not set transformers here, it will not take effects. // [!code highlight]
  },

  // ...

})`,
  styles:
`// This file contains styles for the Shiki code block except syntax highlight.
// For example, font size, line height, focus style and so on.

// CSS Var
:root {
  --code-line-highlight-color: rgba(142, 150, 170, 0.14);
  --code-line-diff-add-color: rgba(16, 185, 129, 0.14);
  --code-line-diff-remove-color: rgba(244, 63, 94, 0.14);
  --code-line-number-color: rgba(115, 138, 148, 0.4);

  --code-offset: 1rem;
  --code-line-height: 1.7;
}

html.dark {
  --code-line-highlight-color: rgba(101, 117, 133, 0.16);
  --code-line-diff-add-color: rgba(16, 185, 129, 0.16);
  --code-line-diff-remove-color: rgba(244, 63, 94, 0.16);
}

// Styles
.shiki,
.shiki code {
  display: block;
  padding: var(--code-offset);
  line-height: var(--code-line-height);

  /* Styles for transformed results */

  /* Highlighted & Diff */

  .line {
    &.highlighted,
    &.diff {
      display: inline-block;
      margin: 0 calc(-1 * var(--code-offset));
      padding: 0 var(--code-offset);
      width: calc(100% + 2rem);
    }

    &.highlighted {
      background-color: var(--code-line-highlight-color);
      transition: background-color 0.5s;
    }

    &.diff {
      &.add {
        background-color: var(--code-line-diff-add-color);
      }

      &.remove {
        background-color: var(--code-line-diff-remove-color);
        opacity: 0.7;
      }
    }
  }

  /* Foucs */

  &.has-focused {
    .line:not(.focused) {
      opacity: 0.7;
      transition:
        filter 0.35s,
        opacity 0.35s;
      filter: blur(0.095rem);
    }
  }

  &:hover.has-focused {
    .line:not(.focused) {
      filter: blur(0);
      opacity: 1;
    }
  }

  /* Line numbers */

  &.show-line-numbers {
    counter-reset: step;
    counter-increment: step calc(var(--start, 1) - 1);

    .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: var(--code-line-number-color);
    }
  }
}

// Dark styles
html.dark {
  .shiki,
  .shiki code {
    background-color: var(--shiki-dark-bg) !important;

    .line span {
      color: var(--shiki-dark) !important;
    }
  }
}`,
  component:
`<!-- This is a wrap of \`Shiki\`, with custom transformers -->

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
</template>`,
  code:
`export const Code = {
  xml:
\`<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body> // [!code focus]
</note>\`,
  javascript:
\`// This is a simple JavaScript code block
function greet(name) {
  return \\\`Hallo, \${name}!\\\`; // [!code --] // Avoid transform
  return \\\`Hello, \${name}!\\\`; // [!code ++] // Avoid transform
}
console.log(greet('World'));\`,
}

export default Code`,
  page:
`<script setup lang="ts">
import { Code } from '#shared/constants/code/shiki/basic-usage.code'

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
      <ShikiJs :code="Code.xml" language="xml" />
    </p>
    <p>
      {{ t('result.javascript') }}
    </p>
    <p>
      <ShikiJs :code="Code.javascript" language="javascript" />
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
  <body>Don't forget me this weekend!</body> // [!code focus]
</note>`,
  javascript:
`// This is a simple JavaScript code block
function greet(name) {
  return \\\`Hallo, \${name}!\\\`; // [!code --]
  return \\\`Hello, \${name}!\\\`; // [!code ++]
}
console.log(greet('World'));`,
}

export default Code
