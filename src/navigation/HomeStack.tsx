import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import CategoryScreen from '../home/screens/CategoryScreen';
import QuestionsScreen from '@home/screens/QuestionsScreen';
const SCREEN_IOS_PADDING = 40;

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: Platform.OS == 'ios' ? SCREEN_IOS_PADDING : 0,
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Questions" component={QuestionsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
