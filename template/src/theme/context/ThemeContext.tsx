import { DefaultTheme, Theme as RNTheme } from '@react-navigation/native';
import { ThemeProvider as RNThemeProvider } from '@shopify/restyle';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  ReactNodeArray,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Appearance } from 'react-native';

import { Theme, darkTheme as defaultDarkTheme, theme as defaultTheme } from '../theme';

type ReactNavigationColors = RNTheme['colors'] & {
  accent?: string;
};

type ReactNavigationTheme = Omit<RNTheme, 'colors'> & {
  colors: ReactNavigationColors;
};

type ThemeContextProviderProps = {
  theme?: Theme;
  darkTheme?: Theme;
  isDarkMode?: boolean;
  children: JSX.Element | ReactNode | ReactNodeArray;
};

type ThemeContextProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;

  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  navigationTheme: ReactNavigationTheme;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({
  theme = defaultTheme,
  darkTheme = defaultDarkTheme,
  isDarkMode = false,
  children,
}: ThemeContextProviderProps): JSX.Element {
  const [customTheme, setCustomTheme] = useState<Theme>(theme);
  const [navigationTheme, setNavigationTheme] = useState<ReactNavigationTheme>(DefaultTheme);

  const [darkMode, setDarkMode] = useState<boolean>(
    isDarkMode || Appearance.getColorScheme() === 'dark',
  );

  useEffect(() => {
    // set dark theme
    if (darkMode) {
      setCustomTheme(darkTheme);
    }

    const { primary, accent, mainBackground } = customTheme.colors;

    setNavigationTheme({
      ...DefaultTheme,
      dark: darkMode,
      colors: {
        ...DefaultTheme.colors,
        primary,
        accent,
        background: mainBackground,
      },
    });
  }, [customTheme.colors, darkMode, darkTheme]);

  const getValues = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      theme: customTheme,
      setTheme: setCustomTheme,
      navigationTheme,
    }),
    [navigationTheme, customTheme, darkMode],
  );

  return (
    <ThemeContext.Provider value={getValues}>
      <RNThemeProvider theme={customTheme}>{children}</RNThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('[ERROR]: `useTheme()` can only be called within a ThemeProvider');
  }

  return context;
}
