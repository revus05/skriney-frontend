import { heroui } from '@heroui/theme'

export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--brown-60-100))',
          foreground: 'hsl(var(--brown-10-100))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--brown-30-100))',
          foreground: 'hsl(var(--brown-90-100))',
        },
        success: {
          DEFAULT: 'hsl(var(--green-60-100))',
          foreground: 'hsl(var(--green-20-100))',
        },
        warning: {
          DEFAULT: 'hsl(var(--yellow-70-100))',
          foreground: 'hsl(var(--yellow-20-100))',
        },
        danger: {
          DEFAULT: 'hsl(var(--red-70-100))',
          foreground: 'hsl(var(--red-20-100))',
        },
        default: {
          DEFAULT: 'hsl(var(--greyscale-10-100))',
          foreground: 'hsl(var(--greyscale-100-100))',
        },
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--brown-60-100))',
          foreground: 'hsl(var(--brown-90-100))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--brown-30-100))',
          foreground: 'hsl(var(--brown-20-100))',
        },
        success: {
          DEFAULT: 'hsl(var(--green-60-100))',
          foreground: 'hsl(var(--green-80-100))',
        },
        warning: {
          DEFAULT: 'hsl(var(--yellow-70-100))',
          foreground: 'hsl(var(--yellow-100-100))',
        },
        danger: {
          DEFAULT: 'hsl(var(--red-70-100))',
          foreground: 'hsl(var(--red-80-100))',
        },
        default: {
          DEFAULT: 'hsl(var(--greyscale-100-100))',
          foreground: 'hsl(var(--greyscale-10-100))',
        },
      },
    },
  },
})
