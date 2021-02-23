import { ThemeI } from 'libs/declarations-ts/interfaces/theme';
import { ThemeModeE } from 'libs/declarations-ts/enums/theme';

export const lightThemeColor = {
  primary: {
    light: '#f2f7f2',
    main: '#4CAF50',
    dark: '#0d7673',
  },
  text: {
    light: '#DBDFDF',
    main: '#354040',
    dark: '#3d4849',
  },
  secondary: {
    light: '#e97261',
    main: '#d85341',
    dark: '#cc4431',
  },
  success: {
    light: '#c7e8e7',
    main: '#37b877',
    dark: '#07984E',
  },
  important: {
    light: '',
    main: '#d8260f',
    dark: '',
  },
  other: {
    other0: '#fff',
    other1: '#eea400',
    other2: ' #226be0',
  },
  layout: {
    header: '#f2f7f2',
    footer: '#f2f7f2',
    main: '#fff',
    paper: '#fff',
    skeleton: '#c7e8e7',
  },
  boxShadow: {
    paperShadow: '0 2px 12px 0 rgba(203,211,212,0.5)',
    popupOverlay: 'rgba(219,223,223,0.6)',
  },
};

export const darkThemeColor = {
  ...lightThemeColor,
  text: {
    light: '#DBDFDF',
    main: '#fff',
    dark: '#3d4849',
  },
  layout: {
    header: '#18191A',
    footer: '#18191A',
    main: '#201F1F',
    paper: '#2D2C2C',
    skeleton: '#ccc',
  },
  boxShadow: {
    paperShadow: '0 2px 12px 0 rgba(203,211,212,0.5)',
    popupOverlay: 'rgba(0,0,0,0.8)',
  },
};

export const breakpoints = {
  mobile: 360,
  tablet: 768,
  desktop: 1170,
};

export const lightThemeColors = {
  primaryLight: lightThemeColor.primary.light,
  primaryMain: lightThemeColor.primary.main,
  primaryDark: lightThemeColor.primary.dark,
  secondaryLight: lightThemeColor.secondary.light,
  secondaryMain: lightThemeColor.secondary.main,
  secondaryDark: lightThemeColor.secondary.dark,
  successLight: lightThemeColor.success.light,
  successMain: lightThemeColor.success.main,
  successDark: lightThemeColor.success.dark,
  textLight: lightThemeColor.text.light,
  textMain: lightThemeColor.text.main,
  textDark: lightThemeColor.text.dark,
  importantLight: lightThemeColor.important.light,
  importantMain: lightThemeColor.important.main,
  importantDark: lightThemeColor.important.dark,

  other0: lightThemeColor.other.other0,
  other1: lightThemeColor.other.other1,
  other2: lightThemeColor.other.other2,

  layoutHeader: lightThemeColor.layout.header,
  layoutFooter: lightThemeColor.layout.footer,
  layoutMain: lightThemeColor.layout.main,
  layoutPaper: lightThemeColor.layout.paper,
  layoutSkeleton: lightThemeColor.layout.skeleton,

  shadowPaper: lightThemeColor.boxShadow.paperShadow,
  shadowPopupOverlay: lightThemeColor.boxShadow.popupOverlay,
};

export const darkThemeColors = {
  primaryLight: darkThemeColor.primary.light,
  primaryMain: darkThemeColor.primary.main,
  primaryDark: darkThemeColor.primary.dark,
  secondaryLight: darkThemeColor.secondary.light,
  secondaryMain: darkThemeColor.secondary.main,
  secondaryDark: darkThemeColor.secondary.dark,
  successLight: darkThemeColor.success.light,
  successMain: darkThemeColor.success.main,
  successDark: darkThemeColor.success.dark,
  textLight: darkThemeColor.text.light,
  textMain: darkThemeColor.text.main,
  textDark: darkThemeColor.text.dark,
  importantLight: darkThemeColor.important.light,
  importantMain: darkThemeColor.important.main,
  importantDark: darkThemeColor.important.dark,

  other0: darkThemeColor.other.other0,
  other1: darkThemeColor.other.other1,
  other2: darkThemeColor.other.other2,

  layoutHeader: darkThemeColor.layout.header,
  layoutFooter: darkThemeColor.layout.footer,
  layoutMain: darkThemeColor.layout.main,
  layoutPaper: darkThemeColor.layout.paper,
  layoutSkeleton: darkThemeColor.layout.skeleton,

  shadowPaper: darkThemeColor.boxShadow.paperShadow,
  shadowPopupOverlay: darkThemeColor.boxShadow.popupOverlay,
};

const QUERY_TYPE = '@media only screen';

export const devices = {
  mobile: `${QUERY_TYPE} and (max-width: ${breakpoints.tablet - 1}px)`,
  tabletOnly: `${QUERY_TYPE} and (min-width: ${
    breakpoints.tablet
  }px) and (max-width: ${breakpoints.desktop - 1}px)`,
  tabletOnlyLandscape: `${QUERY_TYPE} and (min-width: ${
    breakpoints.tablet
  }px) and (max-width: ${
    breakpoints.desktop - 1
  }px) and (orientation: landscape)`,
  mobileLandscape: `${QUERY_TYPE} and (max-width: ${
    breakpoints.tablet - 1
  }px) and (orientation: landscape)`,
  touch: `${QUERY_TYPE} and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `${QUERY_TYPE} and (min-width: ${breakpoints.desktop}px)`,
  iOS: `${QUERY_TYPE} and (-webkit-min-device-pixel-ratio: 2)`,
};

export const fontSizes = {
  smallest: '10px',
  xxxSmall: '11px',
  xxSmall: '12px',
  xSmall: '13px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xLarge: '20px',
  xxLarge: '24px',
  xxxLarge: '32px',
  largest: '40px',
};

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fontFamily = {
  BalooDa2: ` 'Baloo Da 2', cursive`,
  IndieFlower: `'Indie Flower', cursive`,
};

export const other = {
  borderRadius: '4px',
  borderRadiusRound: '50%',
};

const commonTheme = {
  devices,
  fontSizes,
  fontWeights,
  fontFamily,
  other,
};

export const darkTheme: ThemeI = {
  ...commonTheme,
  color: darkThemeColors,
};

export const lightTheme: ThemeI = {
  ...commonTheme,
  color: lightThemeColors,
};

export type ThemeColorsT = typeof lightThemeColors;

export function createTheme(themeMode: string): ThemeI {
  const isDarkMode = themeMode === ThemeModeE.DARK ? true : false;

  return {
    isDarkMode,
    ...(isDarkMode ? darkTheme : lightTheme),
  };
}
