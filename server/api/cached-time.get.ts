// This is a cached event handler
export default defineCachedEventHandler(
  async () => {
    return new Date().toLocaleString()
  },
  // Cache options
  {
    name: 'cached-time',
    // If not provided, will act as the non-cached event handler
    maxAge: 1000 * 60 * 5,
  },
)
