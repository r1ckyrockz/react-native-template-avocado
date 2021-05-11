import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Error, NoInternet } from '../screens';
import { AuthNavigator } from './AuthNavigator';
import { TabNavigator } from './TabNavigator';

export const RootStack = createStackNavigator();

export function RootNavigator(): JSX.Element {
  const isAuthenticated = false;
  const name = isAuthenticated ? 'App' : 'Auth';
  const Component = isAuthenticated ? TabNavigator : AuthNavigator;

  const initialRoute = isAuthenticated ? 'Home' : 'Login';

  return (
    <RootStack.Navigator
      headerMode="none"
      initialRouteName={initialRoute}
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
        animationTypeForReplace: isAuthenticated ? 'push' : 'pop',
      }}>
      {/** define your main stack here */}
      <RootStack.Screen name={name} component={Component} />

      {/** define your error screens here */}
      <RootStack.Screen name="Error" component={Error} />
      <RootStack.Screen name="NoInternet" component={NoInternet} />
    </RootStack.Navigator>
  );
}
