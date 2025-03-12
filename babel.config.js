/* eslint-disable no-undef */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@designSystem': './designSystem',
          '@appTypes': './src/types',
          '@components': './src/components',
          '@home': './src/home',
          '@transport': './src/transport',
          '@utils': './src/utils',
          '@mocks': './src/__mocks__',
          '@assets': './src/assets',
          '@translation': './src/translation',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@env': './env.json',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
