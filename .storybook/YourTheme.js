// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#033778',
  colorSecondary: '#00aadb',

  // UI
  appBg: 'white',
  appContentBg: '#f3f3f3',
  appBorderColor: '#033778',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: '#033778',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'ERNI Storybook',
  brandUrl: 'https://betterask.erni',
  brandImage: 'https://www.betterask.erni/wp-content/themes/g5_hydrogen/custom/images/erni-logo.svg',
  brandTarget: '_self',
});