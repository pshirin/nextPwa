import { heroui } from '@heroui/theme';
import plugin from 'tailwindcss/plugin';
/* sw/sh */
/* scaled height/width by per px*/
const sh = (px) => `calc(${px} * (var(--dvh-per-px, var(--vh-per-px))))`;
// const sw = (px) => `calc(${px} * (var(--dvw-per-px, var(--vw-per-px))))`;

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: {
            100: '#B9C9FF',
          },
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        nunito: ['var(--font-nunito)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      const props = {
        h: ['height'],
        w: ['width'],
        top: ['top'],
        bottom: ['bottom'],
        left: ['left'],
        right: ['right'],
        p: ['padding'],
        px: ['paddingLeft', 'paddingRight'],
        py: ['paddingTop', 'paddingBottom'],
        pt: ['paddingTop'],
        pb: ['paddingBottom'],
        pl: ['paddingLeft'],
        pr: ['paddingRight'],
        m: ['margin'],
        mx: ['marginLeft', 'marginRight'],
        my: ['marginTop', 'marginBottom'],
        mt: ['marginTop'],
        mb: ['marginBottom'],
        ml: ['marginLeft'],
        mr: ['marginRight'],
        gap: ['gap'],
        'gap-x': ['columnGap'],
        'gap-y': ['rowGap'],
        border: ['borderWidth'],
        'border-x': ['borderLeftWidth', 'borderRightWidth'],
        'border-y': ['borderTopWidth', 'borderBottomWidth'],
        'border-t': ['borderTopWidth'],
        'border-b': ['borderBottomWidth'],
        'border-l': ['borderLeftWidth'],
        'border-r': ['borderRightWidth'],
        rounded: ['borderRadius'],
        'rounded-t': ['borderTopLeftRadius', 'borderTopRightRadius'],
        'rounded-b': ['borderBottomLeftRadius', 'borderBottomRightRadius'],
        'rounded-l': ['borderTopLeftRadius', 'borderBottomLeftRadius'],
        'rounded-r': ['borderTopRightRadius', 'borderBottomRightRadius'],
        text: ['fontSize'],
        leading: ['lineHeight'],
        tracking: ['letterSpacing'],
        ring: ['boxShadowWidth'],
        'ring-offset': ['outlineOffset'],
        'space-x': ['columnGap'],
        'space-y': ['rowGap'],
      };
      const utilities = {};

      // Автоматически создаём matchUtilities под каждое свойство
      for (const [short, cssProps] of Object.entries(props)) {
        utilities[`s-${short}`] = (value) => {
          const result = {};
          cssProps.forEach((prop) => {
            result[prop] = sh(value);
          });
          return result;
        };
      }

      matchUtilities(utilities, {
        values: {
          ...theme('spacing'),
          ...theme('borderWidth'),
          ...theme('borderRadius'),
          ...theme('fontSize'),
          ...theme('gap'),
          ...theme('margin'),
          ...theme('padding'),
        },
        supportsNegativeValues: false,
      });
    }),
    heroui({
      prefix: 'heroui',
      addCommonColors: false,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      components: {
        Button: {
          defaultProps: {
            className: 'h-auto',
          },
        },
        Input: {
          defaultProps: {
            className: 'h-auto',
          },
        },
      },
    }),
  ],
};

module.exports = config;
