// import { Config } from 'tailwindcss' // Type import removed for JS compatibility

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Example: deep blue
        secondary: '#F59E0B', // Example: amber
        accent: '#10B981', // Example: emerald
      },
    },
  },
  plugins: [],
}

export default config
