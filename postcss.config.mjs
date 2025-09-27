// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ use this instead of 'tailwindcss'
    autoprefixer: {}, // optional but recommended
  },
}

export default config
