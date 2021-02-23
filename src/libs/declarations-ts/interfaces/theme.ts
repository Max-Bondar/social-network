import {
  devices,
  fontSizes,
  fontWeights,
  fontFamily,
  other,
  ThemeColorsT,
} from 'libs/styled/theme';

type DevicesT = typeof devices;
type FontSizesT = typeof fontSizes;
type FontWeightsT = typeof fontWeights;
type FontFamilyT = typeof fontFamily;
type OtherT = typeof other;

export type ColorsT = ThemeColorsT;

export interface ThemeI {
  isDarkMode?: boolean;
  color: ColorsT;
  devices: DevicesT;
  fontSizes: FontSizesT;
  fontWeights: FontWeightsT;
  fontFamily: FontFamilyT;
  other: OtherT;
}
