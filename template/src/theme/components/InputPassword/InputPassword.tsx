import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

import { Icon } from '../Icon';
import { Input, InputProps } from '../Input';

export function InputPassword<T extends Record<string, string>>(props: InputProps<T>): JSX.Element {
  const [secured, setSecured] = useState<boolean>(true);
  const iconName = secured ? 'eye-outline' : 'eye-off-outline';

  const inputProps: Partial<TextInputProps> = {
    autoCompleteType: 'password',
    textContentType: 'password',
    secureTextEntry: secured,
    right: (
      <TextInput.Icon
        name={() => <Icon name={iconName} size={22} />}
        onPress={() => {
          setSecured(!secured);
        }}
      />
    ),
    ...props.inputProps,
  };

  return <Input {...props} inputProps={inputProps} />;
}
