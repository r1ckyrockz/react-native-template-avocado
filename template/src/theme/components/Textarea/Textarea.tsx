import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

import { Input, InputProps } from '../Input';

export function Textarea<T extends Record<string, string>>(props: InputProps<T>): JSX.Element {
  const inputProps: Partial<TextInputProps> = {
    maxLength: 4000,
    multiline: true,
    numberOfLines: 3,
    clearButtonMode: 'while-editing',
    style: styles.textarea,
    ...props.inputProps,
  };

  return <Input {...props} inputProps={inputProps} />;
}

const styles = StyleSheet.create({
  textarea: {
    maxHeight: 160,
  },
});
