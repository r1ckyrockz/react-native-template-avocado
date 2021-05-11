import {
  getSecureStorage,
  removeSecureStorage,
  setSecureStorage,
  ValueType,
} from '../api/SecureStorage';

type UseSecureStorageReturnValue = {
  setItem: (value: ValueType) => Promise<boolean>;
  getItem: () => Promise<ValueType | null>;
  removeItem: () => Promise<boolean>;
};

export const useSecureStorage = (key: string): UseSecureStorageReturnValue => {
  const handleSetItem = (value: ValueType) => {
    return setSecureStorage(key, value);
  };

  const handleGetItem = () => {
    return getSecureStorage(key);
  };

  const handleDeleteItem = () => {
    return removeSecureStorage(key);
  };

  return {
    setItem: handleSetItem,
    getItem: handleGetItem,
    removeItem: handleDeleteItem,
  };
};
