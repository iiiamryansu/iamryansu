const config = {
  '*.{astro,mjs,js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,json,yml,md}': ['prettier --write'],
}

export default config
