import Config from 'react-native-config';

const cache: Record<string, string> = {};

export const accessEnv = (key: string, defaultValue?: string | number): string | number => {
  // If the .env variable is not declared
  // eslint-disable-next-line no-constant-condition
  if (![key in Config]) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`${key} not found in .env`);
  }

  // If returned as undefined
  if (Config[key] === undefined) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`${key} not found in .env`);
  }

  if (cache[key]) {
    return cache[key];
  }

  cache[key] = Config[key];

  return Config[key];
};
