import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import {
  DocumentTitleOptions,
  LinkingOptions,
} from '@react-navigation/native/lib/typescript/src/types';
import React, { ReactNode, ReactNodeArray } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loading } from '../components/Loading';
import { StatusBar } from '../components/StatusBar';
import { useTheme, Toast } from '../theme';

// default linking configuration
const linking = {
  prefixes: ['myApp://', 'https://app.example.com'],
};

type NavigationContainerProps = {
  // todo: use typeof RNNavigationContainer
  linking?: LinkingOptions | undefined;
  fallback?: React.ReactNode;
  documentTitle?: DocumentTitleOptions | undefined;
  onReady?: (() => void) | undefined;
  children: ReactNode | ReactNodeArray | JSX.Element;
};

export function NavigationContainer({
  children,
  onReady,
  ...rest
}: NavigationContainerProps): JSX.Element {
  const { navigationTheme } = useTheme();

  const handleOnReady = () => {
    if (onReady) {
      onReady();
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    RNBootSplash.hide();
  };

  return (
    <SafeAreaProvider>
      <StatusBar />
      <RNNavigationContainer
        {...rest}
        linking={linking}
        fallback={<Loading />}
        theme={navigationTheme}
        onReady={handleOnReady}>
        {children}
        <Toast />
      </RNNavigationContainer>
    </SafeAreaProvider>
  );
}
