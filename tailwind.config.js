/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#38BDF8',
            500: '#0EA5E9',
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
          },
          dark: {
            100: '#1E293B',
            200: '#1A2031',
            300: '#161B29',
            400: '#121620',
            500: '#0F1217',
          },
          light: {
            100: '#FFFFFF',
            200: '#F8FAFC',
            300: '#F1F5F9',
            400: '#E2E8F0',
            500: '#CBD5E1',
          },
          accent: {
            purple: '#8B5CF6',
            pink: '#EC4899',
            orange: '#F97316',
            teal: '#14B8A6',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce-slow': 'bounce 2s infinite',
          'typing': 'typing 1.2s infinite',
        },
        keyframes: {
          typing: {
            '0%': { transform: 'translateY(0px)' },
            '28%': { transform: 'translateY(-5px)' },
            '44%': { transform: 'translateY(0px)' },
          },
        },
        boxShadow: {
          'glow': '0 0 15px rgba(14, 165, 233, 0.5)',
          'glow-lg': '0 0 25px rgba(14, 165, 233, 0.5)',
        },
      },
    },
    plugins: [],
  }