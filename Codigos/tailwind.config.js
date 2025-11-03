module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF8F4", // very light brown
          100: "#F5E6D3", // light brown
          200: "#E8C5A0", // medium light brown
          300: "#D4A574", // medium brown
          400: "#B8824A", // darker medium brown
          500: "#8B4513", // saddle-brown - main
          600: "#7A3C11", // darker brown
          700: "#68330F", // dark brown
          800: "#562A0D", // very dark brown
          900: "#44210A", // darkest brown
        },
        secondary: {
          DEFAULT: "#D2B48C", // tan
          50: "#FDFBF8", // very light tan
          100: "#F7F0E6", // light tan
          200: "#EDE0CC", // medium light tan
          300: "#E2CFB3", // medium tan
          400: "#DABE99", // darker medium tan
          500: "#D2B48C", // tan - main
          600: "#C5A67D", // darker tan
          700: "#B8986E", // dark tan
          800: "#AB8A5F", // very dark tan
          900: "#9E7C50", // darkest tan
        },
        accent: {
          DEFAULT: "#CD853F", // peru
          50: "#FDF9F4", // very light peru
          100: "#F8EDDC", // light peru
          200: "#F0D7B8", // medium light peru
          300: "#E7C194", // medium peru
          400: "#DEAB70", // darker medium peru
          500: "#CD853F", // peru - main
          600: "#B87538", // darker peru
          700: "#A36531", // dark peru
          800: "#8E552A", // very dark peru
          900: "#794523", // darkest peru
        },
        background: "#FEFEFE", // almost white
        surface: "#F8F6F3", // warm off-white
        text: {
          primary: "#2C1810", // dark brown
          secondary: "#6B4423", // medium brown
        },
        success: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0FDF0", // very light green
          100: "#DCFCE7", // light green
          200: "#BBF7D0", // medium light green
          300: "#86EFAC", // medium green
          400: "#4ADE80", // darker medium green
          500: "#228B22", // forest-green - main
          600: "#1E7A1E", // darker green
          700: "#1A691A", // dark green
          800: "#165816", // very dark green
          900: "#124712", // darkest green
        },
        warning: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FEFCF0", // very light goldenrod
          100: "#FEF7E0", // light goldenrod
          200: "#FDECC8", // medium light goldenrod
          300: "#FCE1B0", // medium goldenrod
          400: "#FBD698", // darker medium goldenrod
          500: "#DAA520", // goldenrod - main
          600: "#C4941D", // darker goldenrod
          700: "#AE831A", // dark goldenrod
          800: "#987217", // very dark goldenrod
          900: "#826114", // darkest goldenrod
        },
        error: {
          DEFAULT: "#B22222", // fire-brick
          50: "#FEF2F2", // very light red
          100: "#FEE2E2", // light red
          200: "#FECACA", // medium light red
          300: "#FCA5A5", // medium red
          400: "#F87171", // darker medium red
          500: "#B22222", // fire-brick - main
          600: "#A01E1E", // darker red
          700: "#8E1A1A", // dark red
          800: "#7C1616", // very dark red
          900: "#6A1212", // darkest red
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'craft': '0 4px 20px rgba(139, 69, 19, 0.1)',
        'craft-lg': '0 8px 30px rgba(139, 69, 19, 0.15)',
        'craft-xl': '0 12px 40px rgba(139, 69, 19, 0.2)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'craft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}