import React, { ReactNode } from 'react';
import { DefaultTheme, Provider, DarkTheme } from 'react-native-paper';

import { useTheme } from '../../theme';

export function PaperProvider({ children }: { children: ReactNode }): JSX.Element {
  const { darkMode, navigationTheme } = useTheme();
  const defaultTheme = darkMode ? DarkTheme : DefaultTheme;

  const providerTheme = {
    ...defaultTheme,
    ...navigationTheme,
    colors: {
      ...defaultTheme.colors,
      ...navigationTheme.colors,
    },
  };

  return <Provider theme={providerTheme}>{children}</Provider>;
}
