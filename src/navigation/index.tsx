import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import Strings from '../translation';
import { ThemeProvider } from '@designSystem/themeProvider';
const AppStack = createNativeStackNavigator();

const AppContainer = () => {
  const setAppLanguage = async () => {
    const savedLang = await AsyncStorage.getItem('preferredLanguage');
    if (!savedLang) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      I18nManager.swapLeftAndRightInRTL(true);
      AsyncStorage.setItem('preferredLanguage', 'ar');
      RNRestart.restart();
    } else {
      const lang = savedLang ?? 'ar';
      Strings.setLanguage(lang);
      return Promise.resolve(true);
    }
  };

  useEffect(() => {
    const appSetup = async () => {
      await setAppLanguage();
    };
    appSetup();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AppStack.Screen name="Home" component={HomeStack} />
        </AppStack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
