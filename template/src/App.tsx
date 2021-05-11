import React from 'react';
import { enableScreens } from 'react-native-screens';

import { PaperProvider } from './context/PaperContext';
import { ErrorBoundary } from './core/ErrorBoundary';
import { setI18nConfig } from './core/I18n';
import { NavigationContainer, RootNavigator } from './navigation';
import { ThemeProvider } from './theme';

// import ErrorHandler for JS and Native Exceptions
import './core/ErrorBoundary/ErrorHandler';

/**
 * Performance boost for react-navigation
 *
 * @see https://reactnavigation.org/docs/react-native-screens
 */
enableScreens();

// initialize localization
setI18nConfig();

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <PaperProvider>
        <ErrorBoundary>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ErrorBoundary>
      </PaperProvider>
    </ThemeProvider>
  );
}
