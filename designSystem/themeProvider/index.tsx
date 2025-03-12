import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactElement,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';
import {darkColors, lightColors} from '@designSystem/colors';

const ThemeContext = createContext({
  isDark: false,
  setIsDark: (isDark: boolean) => {
    console.log('is theme in dark mode!', isDark);
  },
  colors: lightColors,
});

type ThemeProviderProps = {
  children: ReactElement;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const systemIsDark = Appearance.getColorScheme() === 'dark';
  const [isDark, setIsDark] = useState(systemIsDark);

  useEffect(() => {
    const getThemeMode = async () => {
      try {
        const themeFromStorage = await AsyncStorage.getItem('isDark');
        if (themeFromStorage !== null) {
          setIsDark(JSON.parse(themeFromStorage));
        }
      } catch (error) {
        console.error(error);
      }
    };

    getThemeMode();
  }, []);

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{isDark, setIsDark, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
