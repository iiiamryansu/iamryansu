const config = {
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-css-order',
    'prettier-plugin-packagejson',
    'prettier-plugin-sort-json',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 128,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  tailwindFunctions: ['cn'],
  tailwindPreserveDuplicates: false,
  tailwindPreserveWhitespace: false,
}

export default config
