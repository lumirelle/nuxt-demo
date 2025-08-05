<template>
  <div>
    <div>
      <MyH level="1">
        Welcome to Nuxt 4
      </MyH>
    </div>
    <MyH level="2">
      Nuxt Modules
    </MyH>
    <MyH level="3">
      @nuxt/scripts
    </MyH>
    <p>
      <NuxtLink to="/nuxt-scripts">
        <span>Try @nuxt/scripts</span>
      </NuxtLink>
    </p>
    <MyH level="3">
      @element-plus/nuxt
    </MyH>
    <p>
      <NuxtLink to="/element-plus">
        <span>Try @element-plus/nuxt</span>
      </NuxtLink>
    </p>
  </div>
</template>
