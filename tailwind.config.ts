import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Ensure all Svelte components are scanned

  theme: {
    extend: {
      colors: {
        cosmic: {
          light: '#bd93f9',
          DEFAULT: '#6272a4',
          dark: '#282a36',
        },
        accent: {
          green: '#50fa7b',
          pink: '#ff79c6',
          yellow: '#f1fa8c',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'flower-of-life': "url('/path-to-your-flower-of-life-pattern.svg')",
        'golden-ratio': "url('/path-to-your-golden-ratio-pattern.svg')",
      },
    },
  },

  plugins: [typography, forms, containerQueries], // Keep existing plugins
} satisfies Config;

