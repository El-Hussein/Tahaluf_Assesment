import { Appearance } from 'react-native';
export type Colors = {
  main: string;
  'light-main': string;
  'very-light-main': string;
  secondary: string;
  'light-secondary': string;
  error: string;
  'light-error': string;
  'light-purple': string;
  black: string;
  'light-black': string;
  'gray-bg': string;
  'light-gray-bg': string;
  'dark-gray-text': string;
  'very-light-gray-bg': string;
  white: string;
  border: string;
  'gray-text': string;
  success: string;
  green: string;
  'light-green': string;
  'light-gray-text': string;
  'medium-gray-bg': string;
  blue: string;
  brown: string;
  'light-white': string;
  linen: string;
  borderCardsMain: string;
  blackOpacity: string;
  whiteOpacity: string;
  borderGrayLight: string;
};

export const lightColors: Colors = {
  main: '#A87C01',
  'light-main': '#F5F5DC',
  'very-light-main': '#F0F6FA',
  secondary: '#5b463e',
  'light-secondary': '#FAD245 ',
  error: '#FA285D',
  'light-error': '#E36325',
  'light-purple': '#F082A380',
  black: '#000000',
  border: '#E4DFDF',
  borderGrayLight: '#AAA8AE',
  'light-black': '#394046',
  white: '#FFFFFF',
  'light-white': '#F5F5F5',
  'gray-text': '#535763',
  'dark-gray-text': '#4B3621',
  'light-gray-text': '#9CA3AF',
  'very-light-gray-bg': '#F7F7F7',
  'medium-gray-bg': '#D9D8D8',
  'gray-bg': '#7C7C7C',
  'light-gray-bg': '#E8E7E7',
  success: '#77CAA5',
  green: '#005430',
  'light-green': '#004225',
  blue: '#667EFF',
  brown: '#5B463E',
  linen: '#FAF9F6',
  borderCardsMain: '#F5A623',
  blackOpacity: '#00000033',
  whiteOpacity: '#FFFFFF4D',
};

export const darkColors: Colors = {
  main: '#5C8DCF',
  'light-main': '#6A99E0',
  'very-light-main': '#2D3F5A',
  secondary: '#4A6071',
  'light-secondary': '#7AA6C9',
  error: '#FF7272',
  'light-error': '#D95C5C',
  'light-purple': '#A382B8',
  black: '#FFFFFF',
  border: '#3E4A52',
  'light-black': '#E1E1E1',
  white: '#1A1A1A',
  'light-white': '#2B2B2B',
  'gray-text': '#CACACA',
  'dark-gray-text': '#A5A8A8',
  'light-gray-text': '#8E8E8E',
  'very-light-gray-bg': '#2D2F31',
  'medium-gray-bg': '#3B3D3F',
  'gray-bg': '#505354',
  'light-gray-bg': '#414345',
  success: '#6EBFA4',
  green: '#3F8D73',
  'light-green': '#2B6A57',
  blue: '#7CA6F9',
  brown: '#6A7073',
  linen: '#2F3133',
  borderCardsMain: '#7CA6F9',
  blackOpacity: '#00000033',
  whiteOpacity: '#FFFFFF4D',
  borderGrayLight: '#AAA8AE',
};

const isDark = Appearance.getColorScheme() === 'dark';

export const colors = isDark ? darkColors : lightColors;
