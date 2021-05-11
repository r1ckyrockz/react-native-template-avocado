import i18n, { Scope, TranslateOptions } from 'i18n-js';
import { MemoizedFunction } from 'lodash';
import memoize from 'lodash.memoize';
import { I18nManager } from 'react-native';
import { findBestAvailableLanguage } from 'react-native-localize';

type TranslationGetters = {
  [key: string]: () => Record<string, unknown>;
};

export const translationGetters: TranslationGetters = {
  // lazy requires (metro bundler does not support symlinks
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  en: () => require('../../locales/en.json'),
};

type Translation = ((key: Scope, config?: TranslateOptions) => string) & MemoizedFunction;

export const translate: Translation = memoize(
  (key: Scope, config?: TranslateOptions) => i18n.t(key, config),
  (key: Scope, config?: TranslateOptions) =>
    config ? `${String(key)}${JSON.stringify(config)}` : key,
);

export const setI18nConfig = (): void => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } =
    findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

  console.log(languageTag);

  // clear translation cache
  // @ts-expect-error because cache may be not fully typed
  translate.cache.clear();

  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
