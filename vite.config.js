import { defineConfig } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'

export default defineConfig({
  plugins: [
    SearchPlugin({
      lang:'cs',
      encode: false,
      tokenize: 'full',
      previewLength: 62,
      buttonLabel: "Hledat",
      placeholder: "Hledat...",
    }),
  ]
});