<!-- This is a custom component example with render function and slots -->

<script setup lang="ts">
const props = defineProps<{
  level: '1' | '2' | '3' | '4' | '5' | '6'
}>()

const slots = useSlots()

function Render() {
  return h(
    `h${props.level}`,
    {
      class: `group text-${props.level} font-bold relative`,
    },
    [
      h('span', {
        class: 'text-gray-500 absolute -left-6 hidden group-hover:block',
      }, '#'),
      slots.default?.(),
    ],
  )
}
</script>

<template>
  <Render />
</template>
