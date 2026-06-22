/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* `navy` = blue-grey INK ramp for text + dark surfaces.
           950 = brand Text #0B1F33, 500 = Muted Text #6B7A8C. */
        navy: {
          50: '#f2f6fa',
          100: '#e6edf4',
          200: '#d2dde8',
          300: '#b3c2d2',
          400: '#8c9cae',
          500: '#6b7a8c',
          600: '#4d5d70',
          700: '#36465a',
          800: '#1f3147',
          900: '#142435',
          950: '#0b1f33',
        },
        /* `teal` = the BLUE accent family.
           700 = Primary #0F4C81, 500 = Secondary #1E88E5, 400 = Accent #4FC3F7. */
        teal: {
          50: '#eef6fd',
          100: '#d7eafb',
          200: '#b6dcf9',
          300: '#7fc7f6',
          400: '#4fc3f7',
          500: '#1e88e5',
          600: '#1670c4',
          700: '#0f4c81',
          800: '#0d3f6c',
          900: '#0c3358',
        },
        aqua: {
          300: '#8fd6fb',
          400: '#4fc3f7',
          500: '#1e88e5',
        },
        /* Primary action blue (kept as `grass` for back-compat). */
        grass: {
          400: '#1e88e5',
          500: '#1670c4',
          600: '#0f4c81',
          700: '#0d3f6c',
        },
        /* Pure white base + soft blue surface. */
        cream: '#ffffff',
        offwhite: '#f8fbff',

        /* shadcn/ui semantic tokens (driven by CSS variables) */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'spektr-cyan': {
          50: 'hsl(var(--spektr-cyan-50))',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 76, 129, 0.04), 0 10px 30px -16px rgba(15, 76, 129, 0.14)',
        card: '0 2px 8px -3px rgba(15, 76, 129, 0.08), 0 28px 60px -28px rgba(15, 76, 129, 0.22)',
        float: '0 12px 32px -12px rgba(15, 76, 129, 0.18), 0 48px 80px -34px rgba(15, 76, 129, 0.30)',
        glow: '0 0 0 1px rgba(15, 76, 129, 0.06), 0 20px 50px -20px rgba(30, 136, 229, 0.30)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '1.75rem',
        '5xl': '2.25rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.32, 0.72, 0, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(18px, -22px) scale(1.06)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
