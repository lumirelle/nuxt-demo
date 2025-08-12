export default defineEventHandler(async () => {
  const value = Math.random() * 10
  if (value < 5) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error!',
    })
  }
  return { message: 'Success!' }
})
