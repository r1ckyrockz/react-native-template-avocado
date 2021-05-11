import React from 'react';
import { Button } from 'react-native-paper';

import { requiredRule } from '../../../../context/FormContext/utils/rules';
import { Box, Input, InputPassword } from '../../../../theme';
import { useLoginForm } from '../../FormProvider';

export function LoginForm(): JSX.Element {
  const { control, handleSubmit, onSubmit } = useLoginForm();

  return (
    <Box marginBottom="m">
      <Input
        label="Username"
        control={control}
        rules={requiredRule()}
        name="username"
        inputProps={{
          autoCompleteType: 'username',
          textContentType: 'username',
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
      />
      <InputPassword label="Password" control={control} rules={requiredRule()} name="password" />

      <Button mode="outlined" onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </Box>
  );
}
