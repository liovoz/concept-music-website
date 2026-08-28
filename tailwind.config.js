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
          tertiary: '#86868b',
          muted: '#a1a1a6',
        },
        apple: {
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          gray: '#86868b',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-light': 'rgba(0, 0, 0, 0.05)',
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
      boxShadow: {
        'apple-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'apple-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'apple-floating': '0 25px 60px -15px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
        'apple-button': '0 2px 8px -1px rgba(0, 113, 227, 0.3)',
      }
    },
  },
  plugins: [],
}
