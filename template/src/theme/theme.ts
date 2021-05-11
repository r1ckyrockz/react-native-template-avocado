import { createTheme } from '@shopify/restyle';

import { palette } from './palette';
import { textVariants } from './variants/textVariants';

export const theme = createTheme({
  colors: {
    primary: palette.bluePrimary,
    accent: palette.greenPrimary,

    mainBackground: palette.surfaceLight,
    cardPrimaryBackground: palette.purplePrimary,

    white: palette.white,
    black: palette.black,
    red: palette.red,
    transparent: palette.transparent,

    lightGrey: palette.gray6,
    buttonBorderColor: palette.purpleDark,
    buttonBackgroundColor: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants,
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.surfaceDark,
  },
};
