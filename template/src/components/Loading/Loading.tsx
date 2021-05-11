import React from 'react';

import { translate } from '../../core/I18n';
import { Box, Text } from '../../theme';

export type LoadingProps = {
  message?: string;
};

const defaultMessage = `${translate('general.loading')}...`;

export function Loading({ message = defaultMessage }: LoadingProps): JSX.Element {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}
