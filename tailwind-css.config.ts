import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{html,ts,js}",
    "./.storybook/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4E61F6',
        'primary-hover': '#3D4FE7',
        'primary-active': '#2D3DD4',
        'secondary': 'transparent',
        'secondary-hover': '#F5F7FF',
        'secondary-active': '#E9EDFF',
        'text-dark': '#131927',
        'text-light': '#6D717F',
        'input-border': '#E5E7EA',
        'placeholder': '#9EA2AE',
        'popup-bg': '#F9FAFB',
        'popup-border': '#F3F4F6',
      },
      borderRadius: {
        'popup': '12px',
      },
      spacing: {
        'popup-padding': '24px',
        'buttons-gap': '16px',
        'title-message-gap': '4px',
      },
    },
  },
  plugins: [],
};

export default config; 