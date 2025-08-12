export default defineEventHandler(async () => {
  const value = Math.random() * 10
  if (value < 5) {
    return { message: 'Yes' }
  }
  return { message: 'No' }
})
