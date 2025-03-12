import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '@auth/register/screens/RegisterScreen';
import ForgetPassword from '@auth/forgetPassword/screens/ForgetPasswordScreen';
import Login from '@auth/login/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
