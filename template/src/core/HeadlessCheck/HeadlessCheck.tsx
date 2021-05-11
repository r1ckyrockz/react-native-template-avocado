import React from 'react';

import { App } from '../../App';

type HeadlessCheckProps = {
  isHeadless?: boolean;
};

export function HeadlessCheck({ isHeadless }: HeadlessCheckProps) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}
