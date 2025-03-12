import { Dimensions } from 'react-native';

export const widthRatio = Dimensions.get('window').width / 360;
export const heightRatio = Dimensions.get('window').height / 800;

export const borders = {
  xs: widthRatio * 1,
  sm: widthRatio * 2,
  md: widthRatio * 4,
  lg: widthRatio * 8,
  'radius-sm': widthRatio * 4,
  'radius-xsm': widthRatio * 8,
  'radius-md': widthRatio * 10,
  'radius-lg': widthRatio * 12,
  'radius-xl': widthRatio * 18,
  'radius-2xl': widthRatio * 32,
  'radius-full': widthRatio * 9999,
};

export const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'Roboto, sans-serif',
  mono: 'Roboto, monospace',
};

export const iconSizes = {
  xs: widthRatio * 8,
  sm: widthRatio * 10,
  md: widthRatio * 12,
  lg: widthRatio * 16,
  xl: widthRatio * 18,
  '2xl': widthRatio * 24,
  '3xl': widthRatio * 28,
  '4xl': widthRatio * 36,
  '5xl': widthRatio * 44,
};

export const fontSizes = {
  xs: widthRatio * 8,
  sm: widthRatio * 10,
  md: widthRatio * 12,
  '[14px]': widthRatio * 14,
  lg: widthRatio * 16,
  xl: widthRatio * 18,
  '2xl': widthRatio * 24,
  '3xl': widthRatio * 28,
  '4xl': widthRatio * 36,
  '5xl': widthRatio * 48,
  '6xl': widthRatio * 64,
};

export const lineHeights = {
  xs: widthRatio * 10,
  sm: widthRatio * 14,
  md: widthRatio * 18,
  lg: widthRatio * 20,
  xl: widthRatio * 28,
  '2xl': widthRatio * 32,
  '3xl': widthRatio * 40,
  '4xl': widthRatio * 48,
  '5xl': widthRatio * 60,
};

export const paddings = {
  tiny: 3,
  xs: widthRatio * 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: widthRatio * 24,
  '2xl': widthRatio * 32,
  '3xl': widthRatio * 40,
  '4xl': 60,
  '5xl': 100,
};

export const margins = {
  tiny: 3,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 60,
  '5xl': 100,
};

export const widths = {
  tiny: widthRatio * 32,
  xTiny: widthRatio * 54,
  xs: widthRatio * 67,
  xsm: widthRatio * 90,
  '[75px]': widthRatio * 75,
  sm: widthRatio * 120,
  md: widthRatio * 160,
  lg: widthRatio * 250,
  xl: widthRatio * 350,
  '2xl': widthRatio * 450,
  '3xl': widthRatio * 550,
};

export const heights = {
  tiny: heightRatio * 10,
  xs: heightRatio * 12,
  sm: heightRatio * 16,
  md: heightRatio * 24,
  lg: heightRatio * 36,
  xl: heightRatio * 48,
  '2xl': heightRatio * 56,
  '3xl': heightRatio * 64,
  '[70px]': heightRatio * 70,
  '4xl': heightRatio * 98,
};

export const imageHeights = {
  xs: heightRatio * 120,
  sm: heightRatio * 140,
  md: heightRatio * 180,
  lg: heightRatio * 250,
  xl: heightRatio * 350,
  '2xl': heightRatio * 500,
};

export const circles = {
  tiny: widthRatio * 10,
  xs: widthRatio * 24,
  sm: widthRatio * 32,
  md: widthRatio * 42,
  sp: widthRatio * 67,
  lg: widthRatio * 100,
  xl: widthRatio * 160,
};
