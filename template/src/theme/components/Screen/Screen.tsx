import React, { ReactNodeArray, ReactNode } from 'react';

import { Box } from '../Box';

export type ScreenProps = {
  children: JSX.Element | ReactNode | ReactNodeArray;
};

export function Screen({ children }: ScreenProps): JSX.Element {
  return (
    <Box flex={1} bg="mainBackground">
      {children}
    </Box>
  );
}
