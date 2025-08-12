export default defineCachedEventHandler(
  async () => {
    return new Date().toLocaleString()
  },
  {
    name: 'cached-time',
  },
)
