export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['ant-design-vue/dist/reset.css'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  }
})
