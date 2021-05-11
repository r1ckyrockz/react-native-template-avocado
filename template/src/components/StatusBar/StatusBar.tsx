import React from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';

import { useTheme } from '../../theme';

export function StatusBar({ barStyle, backgroundColor, ...rest }: StatusBarProps): JSX.Element {
  const { darkMode, navigationTheme } = useTheme();
  return (
    <RNStatusBar
      {...rest}
      barStyle={barStyle || darkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundColor || navigationTheme.colors.background}
    />
  );
}
