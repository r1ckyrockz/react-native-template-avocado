import React from 'react';

import { Screen, Text, Box } from '../../theme';

export function ForgotPassword(): JSX.Element {
  return (
    <Screen>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Forgot Password</Text>
      </Box>
    </Screen>
  );
}
