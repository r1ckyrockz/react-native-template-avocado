import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export const useNetworkConnection = (): NetInfoState | null => {
  const [state, setState] = useState<NetInfoState | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(netState => {
      setState(netState);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return state;
};
