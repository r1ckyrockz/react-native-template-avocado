import React from 'react';
import { StyleSheet } from 'react-native';
import { getLocales } from 'react-native-localize';
import { HelperText } from 'react-native-paper';

type InputCounterProps = {
  value: string;
  maxLength?: number;
};

const languageTag = getLocales()[0].languageTag ?? 'en-US';

export const parseToLocaleNumber = (value: number): string => {
  return new Intl.NumberFormat(languageTag).format(value);
};

export function InputCounter({ value, maxLength }: InputCounterProps): JSX.Element | null {
  if (!maxLength) {
    return null;
  }

  const valueNumber = parseToLocaleNumber(value?.length ?? 0);
  const maxNumber = parseToLocaleNumber(maxLength ?? 4000);

  return (
    <HelperText type="info" style={styles.text}>
      {valueNumber} / {maxNumber}
    </HelperText>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'right',
  },
});
