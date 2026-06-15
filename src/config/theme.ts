export const theme = {
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
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    full: '9999px',
  },
  shadows: {
    neumorphic: {
      card: '20px 20px 40px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
      button: '8px 8px 16px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
      buttonHover: '12px 12px 24px rgba(0, 0, 0, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.02)',
      panel: 'inset 0 1px 0 rgba(255, 255, 255, 0.02), 10px 10px 20px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.01)',
    },
  },
} as const

export type Theme = typeof theme
