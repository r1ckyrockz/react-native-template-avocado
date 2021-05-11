import EncryptedStorage from 'react-native-encrypted-storage';

export type ValueType = string | number | boolean | Record<string, unknown>;

export const setSecureStorage = async (key: string, value: ValueType): Promise<boolean> => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));

    // Congrats! You've just stored your value secure!
    return true;
  } catch {
    // There was an error on the native side
    return false;
  }
};

export const getSecureStorage = async (key: string): Promise<ValueType | null> => {
  try {
    const value: string | null | undefined = await EncryptedStorage.getItem(key);

    if (value !== undefined) {
      // Congrats! You've just retrieved your first value!
      return JSON.parse(value ?? '');
    }
  } catch {
    // There was an error on the native side
  }

  return null;
};

export const removeSecureStorage = async (key: string): Promise<boolean> => {
  try {
    await EncryptedStorage.removeItem(key);

    // Congrats! You've just removed your value!
    return true;
  } catch {
    // There was an error on the native side
    return false;
  }
};

export const clearSecureStorage = async (): Promise<boolean> => {
  try {
    await EncryptedStorage.clear();
    // Congrats! You've just cleared the device storage!
    return true;
  } catch {
    // There was an error on the native side
    return false;
  }
};
