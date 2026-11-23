/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#fbfbfd',
        surface: '#ffffff',
        subtle: '#f5f5f7',
        ink: {
          primary: '#1d1d1f',
          secondary: '#515154',
          tertiary: '#6e6e73',
          muted: '#6e6e73',
        },
        apple: {
          blue: '#0071e3',
          'blue-hover': '#0062c4',
          gray: '#6e6e73',
          border: 'rgba(29, 29, 31, 0.10)',
          'border-light': 'rgba(29, 29, 31, 0.06)',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif'
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        tight: '-0.015em',
      },
      transitionTimingFunction: {
        studio: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'surface-xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'surface-sm': '0 4px 16px -2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'surface-md': '0 12px 32px -6px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'surface-lg': '0 24px 56px -14px rgba(0, 0, 0, 0.12), 0 8px 20px -6px rgba(0, 0, 0, 0.05)',
        'apple-subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'apple-card': '0 4px 16px -2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'apple-floating': '0 24px 56px -14px rgba(0, 0, 0, 0.12), 0 8px 20px -6px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
