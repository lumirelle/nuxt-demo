export const Code = {
  time:
`export default defineEventHandler(async () => {
  return new Date().toLocaleString()
})`,
  ask:
`export default defineEventHandler(async () => {
  const value = Math.random() * 10
  if (value < 5) {
    return { message: 'Yes' }
  }
  return { message: 'No' }
})`,
  sumbit:
`export default defineEventHandler(async () => {
  const value = Math.random() * 10
  if (value < 5) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error!',
    })
  }
  return { message: 'Success!' }
})`,
  page:
`<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})

// Use \`useFetch\` & \`useAsyncData\` for server-side data fetching // [!code focus]

// \`useFetch\` is a developer experience sugar of \`useAsyncData\` & \`$fetch\` // [!code focus]
// This is nearly equivalent to \`useAsyncData('staticMeal', () => $fetch('/api/time'))\` // [!code focus]
const { data } = useFetch('/api/time', { // [!code focus]
  key: 'time', // [!code focus]
  method: 'get', // [!code focus]
}) // [!code focus]

const stringifiedData = computed(() => JSON.stringify(data.value, null, 2)) // [!code focus]

function submit() {
  // Use \`$fetch\` for client-side data fetching // [!code focus]
  $fetch('/api/submit', { // [!code focus]
    method: 'post', // [!code focus]
  }).then((res) => { // [!code focus]
    ElMessage.success(res.message) // [!code focus]
  }).catch((error) => { // [!code focus]
    ElMessage.error(error.message) // [!code focus]
  }) // [!code focus]
}

const question = ref('')

function ask() {
  // Use \`$fetch\` for client-side data fetching // [!code focus]
  $fetch('/api/ask', { // [!code focus]
    method: 'get', // [!code focus]
  }).then((res) => { // [!code focus]
    ElMessage.success(res.message) // [!code focus]
  }).catch((error) => { // [!code focus]
    ElMessage.error(error.message) // [!code focus]
  }) // [!code focus]
}
</script>

<template>
  <div>
    <section>
      <H level="3">
        <code>$fetch</code>
      </H>
      <div flex gap-4 h-100px>
        <div flex="~ 1 col" justify-between>
          <p>{{ t('click-submit') }}</p>
          <ElButton @click="submit"> // [!code focus]
            {{ t('submit') }} // [!code focus]
          </ElButton> // [!code focus]
        </div>
        <div flex="~ 1 col" justify-between>
          <p>{{ t('blur-ask') }}</p>
          <ElInput v-model="question" @blur="ask" /> // [!code focus]
        </div>
      </div>
    </section>
    <section>
      <H level="3">
        <code>useFetch</code> & <code>useAsyncData</code>
      </H>
      <ShikiJs :code="stringifiedData" lang="json" /> // [!code focus]
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  submit: Submit
  click-submit: If you click this submit button, you will get an equal share of both error and success.
  blur-ask: If you leave this input, you will get an equal share of both yes and no.

zh-CN:
  submit: 提交
  click-submit: 如果您点击此提交按钮，您将获得错误和成功各自一半。
  blur-ask: 如果您离开此输入框，您将获得“是”和“否”各自一半。

zh-TW:
  submit: 提交
  click-submit: 如果您點擊此提交按鈕，您將獲得錯誤和成功各自一半。
  blur-ask: 如果您離開此輸入框，您將獲得“是”和“否”各自一半。
</i18n>`,
}

export default Code
