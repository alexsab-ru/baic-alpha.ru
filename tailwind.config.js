import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = [
  './**/*.html',
  "./src/**/*.{html,js,ts,jsx,tsx,vue}",
]
export const theme = {
  container: {
    center: true,
    padding: '1.25rem',
  },
  colors: {
    blue: '#1b3252',
    red: '#D2251A',
    accent: '#D2251A',
    transparent: 'transparent',
    white: colors.white,
    black: colors.black,
    gray: colors.gray,
    green: colors.green,
  },
  extend: {
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    /*
    screens: {
      's1024_1074': {'min': '1024px', 'max': '1074px'},
      's1280_1330': {'min': '1280px', 'max': '1330px'},
      's1536_1586': {'min': '1536px', 'max': '1586px'},
    },
    */
  },
}
export const plugins = []

