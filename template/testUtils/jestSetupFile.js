/**
 * this file is explicit a javascript instead of TypeScript file format, because the missing types of
 * @react-native-async-storage/async-storage/jest/async-storage-mock
 *
 * @see:https://github.com/react-native-async-storage/async-storage/issues/504
 */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Toast Message
jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

/**
 * these mocks are for testing the navigation
 *
 * @see https://reactnavigation.org/docs/testing
 */
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// react-native-text-input-mask
jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}));
