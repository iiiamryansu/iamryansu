import eslintPluginAstro from 'eslint-plugin-astro'
import perfectionist from 'eslint-plugin-perfectionist'

const config = [perfectionist.configs['recommended-natural'], ...eslintPluginAstro.configs.recommended]

export default config
