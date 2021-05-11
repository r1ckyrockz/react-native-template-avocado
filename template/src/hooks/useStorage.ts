import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { getPrefixedKey } from '../api/Storage';

// duplicate return value from useAsyncStorage
type ReturnType = {
  getItem(callback?: (error?: Error, result?: string) => void): Promise<string | null>;
  setItem(value: string, callback?: (error?: Error) => void): Promise<void>;
  mergeItem(value: string, callback?: (error?: Error) => void): Promise<void>;
  removeItem(callback?: (error?: Error) => void): Promise<void>;
};

export const useStorage = (key: string): ReturnType => {
  return useAsyncStorage(getPrefixedKey(key));
};
