import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0F',
          subtle: '#0F0F15',
          card: '#15151E',
        },
        surface: {
          DEFAULT: '#1A1A24',
          hover: '#22222E',
          active: '#2A2A38',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          subtle: 'rgba(255, 255, 255, 0.03)',
        },
        primary: {
          DEFAULT: '#9CB080',
          light: '#B2C49A',
          dark: '#7A8F60',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0B0',
          tertiary: '#6B6B7D',
        },
        accent: {
          DEFAULT: '#5B6E8C',
          light: '#7A8FA8',
        },
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'blur-reveal': 'blurReveal 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blurReveal: {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
