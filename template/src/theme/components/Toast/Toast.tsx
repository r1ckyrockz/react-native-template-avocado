import React from 'react';
import RNToast from 'react-native-toast-message';

export function Toast(): JSX.Element {
  return <RNToast ref={ref => RNToast.setRef(ref)} />;
}
