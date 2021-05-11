import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ForgotPassword, Login, Register } from '../screens';
import { useTheme } from '../theme';
import { defaultScreenOptions, headerStyles, modalOptions } from './headerStyles';

export const AuthStack = createStackNavigator();

export function AuthNavigator(): JSX.Element {
  const { navigationTheme } = useTheme();
  const navigation = useNavigation();

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      headerMode="screen"
      mode="modal"
      screenOptions={headerStyles}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          header: () => null,
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: 'pop',
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={modalOptions('Register', () => {
          navigation.navigate('Auth', { screen: 'Login' });
        })}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={modalOptions('Forgot Password', () => {
          navigation.navigate('Auth', { screen: 'Login' });
        })}
      />
    </AuthStack.Navigator>
  );
}
