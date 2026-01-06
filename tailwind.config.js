export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#474747',
        'dark-gray-3': '#666666',
        'light-gray': '#8F8F8F',
        'light-gray-2': '#CCCCCC',
        'light-gray-3': '#F5F5F5',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(1.1)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1.1)' },
        },
      }
    }
  },
  plugins: [],
}