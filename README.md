# Nuxt 4 Demo

## Architecture

Basic Framework:

- [Nuxt 4](https://nuxt.com/docs/4.x/getting-started/introduction) ([Vue 3](https://vuejs.org/guide/introduction.html))

UI Library:

- [Element Plus](https://element-plus.org/zh-CN/guide/design.html)

CSS Framework:

- [UnoCSS](https://unocss.dev/guide/)

## Nuxt 4

Nuxt 4 provides a lot of features than Nuxt 2, including:

- Plenty of modules support
  - `@nuxt/image` for image optimization
  - `@nuxt/scripts` for third party scripts loading
  - `@nuxt/seo` for better SEO
  - ...
- Performance improvements
  - Using Vite instead of Webpack
  - Using Nitro instead of Connect
  - Using Vue 3 instead of Vue 2
  - ...
- SEO friendly (Thanks to `@nuxt/seo` & Nuxt 4 itself)
- Better DX
  - Fully typed, let you write code with less document
  - Nuxt devtools panel integrated many plugins & modules
  - ...
- Clearly file structure
  - All codes related to application side are in `app` directory
  - All codes related to server side are in `server` directory
  - ...
- ...

### Nuxt Modules

TODO:

See [Nuxt Modules Page](https://nuxt.com/modules) for more information.

### Vue Addons

TODO:

## UnoCSS

UnoCSS is a atomic CSS framework has great performance than pure Tailwind CSS.

Atomic CSS can reduce the size of the CSS file, especially for a large project.

UnoCSS has presets compatible with Tailwind CSS & other CSS frameworks.

This demo use `presetWind3` & `presetAttributify` presets, compatible with Tailwind CSS 3 & attributify atomic css classes.

Before attributify:

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4">
  <p class="text-5 font-bold">Nuxt 4 Demo</p>
</div>
```

After attributify:

```html
<div flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4>
  <p text-5 font-bold>Nuxt 4 Demo</p>
</div>
```

Attributify let you write CSS classes like HTML attributes, which can avoid the mixing of semantic & non-semantic classes.

For example below, `page-header` & `page-title` are semantic classes which are commonly used in JS, and it's annoying for developers to find them with so many other non-semantic classes.

```html
<div class="flex flex-row justify-between items-center max-w-1200px mx-auto py-1 px-4 page-header">
  <p class="text-5 font-bold page-title">Nuxt 4 Demo</p>
</div>
```
