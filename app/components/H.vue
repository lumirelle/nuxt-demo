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
      class: `group font-bold relative ml--0.4em mb-0.5em pl-0.4em`,
    },
    [
      h('span', {
        class: 'text-gray-500 absolute left--0.4em hidden group-hover:block',
      }, '#'),
      slots.default?.(),
    ],
  )
}
</script>

<template>
  <Render />
</template>
