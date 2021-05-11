import AsyncStorage from '@react-native-async-storage/async-storage';

type ValueType = string | number | boolean | Record<string, unknown>;

export const getPrefixedKey = (key: string): string => {
  return key.startsWith('@') ? key : `@${key}`;
};

export const setStorage = async (key: string, value: ValueType): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(getPrefixedKey(key), JSON.stringify(value));

    // Congrats! You've just stored your value!
    return true;
  } catch {
    // There was an error on the native side
    return false;
  }
};

export const getStorage = async (key: string): Promise<ValueType | null> => {
  try {
    const value: string | null | undefined = await AsyncStorage.getItem(getPrefixedKey(key));

    // Congrats! You've just get your stored value!
    return JSON.parse(value ?? '');
  } catch {
    // There was an error on the native side
    return null;
  }
};

export const removeStorage = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(getPrefixedKey(key));

    // Congrats! You've just removed your stored value!
    return true;
  } catch {
    // There was an error on the native side
    return false;
  }
};

export const clearStorage = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear();

    // Congrats! You've just removed all your stored values!
    return true;
  } catch {
    // There was an error on the native side
    return false;
  }
};
