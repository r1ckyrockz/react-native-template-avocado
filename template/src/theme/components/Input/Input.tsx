import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

import { InputCounter } from './InputCounter';

export type InputProps<TFieldValues> = Omit<ControllerProps<TFieldValues>, 'render'> & {
  label: string;
  inputProps?: Partial<TextInputProps>;
};

export function Input<T extends Record<string, string>>({
  label,
  name,
  rules,
  control,
  inputProps,
  ...rest
}: InputProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...rest}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          <TextInput
            label={label}
            mode="outlined"
            error={!!error}
            {...inputProps}
            onBlur={onBlur}
            onChangeText={value => {
              onChange(value);
            }}
            value={value}
          />
          <InputCounter value={value} maxLength={inputProps?.maxLength} />
          <HelperText type="error" visible={!!error?.message}>
            {error?.message}
          </HelperText>
        </>
      )}
    />
  );
}
