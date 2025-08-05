import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    // `presetWind3` provides the same rules as Tailwind CSS 3
    presetWind3(),
    // `presetAttributify` let you can write CSS classes like HTML attributes
    presetAttributify(),
  ],
  // Custom rules here, with the magic of `presetAttributify` ~
  // This is an example of generating custom rules with Element Plus theme variables
  rules: [
    ['bg-default', {
      'background-color': 'var(--el-bg-color)',
    }],
    [/bg-\((.*)\)/, ([, c]) => ({
      'background-color': `var(${c})`,
    })],
    ['border-default', {
      'border-color': 'var(--el-border-color)',
    }],
    [/border-\((.*)\)/, ([, c]) => ({
      'border-color': `var(${c})`,
    })],
  ],
})
