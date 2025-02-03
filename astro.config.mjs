import node from '@astrojs/node'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

const config = defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
})

export default config
