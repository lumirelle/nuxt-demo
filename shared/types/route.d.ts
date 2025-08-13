declare module '#app' {
  interface PageMeta {
    /**
     * The parent route path of this page, will auto prefixing with locale
     */
    parent?: string
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
