export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#7c5cff',
          600: '#6d4dff',
          700: '#5b3df5',
        },

        accent: {
          blue: '#4f8cff',
          pink: '#d67eff',
        },

        text: {
          primary: '#0f172a',
          secondary: '#64748b',
          muted: '#94a3b8',
          white: '#ffffff',
        },

        bg: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          card: '#ffffff',
          footer: '#141B2E',
        },

        border: {
          light: '#e2e8f0',
          card: '#eef2ff',
        },

        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.75rem',
        '5xl': '4rem',
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      lineHeight: {
        tight: '1.1',
        normal: '1.5',
        relaxed: '1.7',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4f8cff 0%, #7c5cff 50%, #d67eff 100%)',

        'gradient-hero': 'linear-gradient(180deg, #ffffff 0%, #f7f7ff 100%)',

        'gradient-footer': 'linear-gradient(135deg, #091329 0%, #172554 50%, #312e81 100%)',
      },
    },
  },
  plugins: [],
};
