import type { AskResp } from '#shared/schemas/ask'

export default defineEventHandler(async () => {
  const value = Math.random() * 10
  if (value < 5) {
    return { message: 'Yes' } as AskResp
  }
  return { message: 'No' } as AskResp
})
