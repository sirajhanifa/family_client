/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#348888',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #fff, 0 0 20px #ff66cc, 0 0 30px #ff66cc' },
          '100%': { textShadow: '0 0 20px #ff66cc, 0 0 40px #ff66cc, 0 0 50px #ff66cc' },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 6s steps(40, end), blink 1s step-end infinite',
        glow: 'glow 2s infinite alternate',
        pulse: 'pulse 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        bounceIn: 'bounceIn 1s ease-out',
        fadeIn: 'fadeIn 2s ease-out',
        slideUp: 'slideUp 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
