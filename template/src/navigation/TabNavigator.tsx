import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Home, Profile } from '../screens';
import { Icon } from '../theme';

export const TabStack = createBottomTabNavigator();

export const getRouteIconName = (routeName: string): string => {
  return 'home';
};

export function TabNavigator(): JSX.Element {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const name = getRouteIconName(route.name);
          return <Icon size={size} color={color} name={name} />;
        },
      })}>
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen name="Profile" component={Profile} />
    </TabStack.Navigator>
  );
}
