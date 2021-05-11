import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';
import React from 'react';

const lottieFiles = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  login: require('../../../assets/animations/login.json'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  noInternetConnection: require('../../../assets/animations/no-internet-connection.json'),
};

export type AnimationFileProps = Omit<AnimatedLottieViewProps, 'source'> & {
  fileName: keyof typeof lottieFiles;
};

export function AnimationFile({ fileName, ...rest }: AnimationFileProps): JSX.Element {
  return <LottieView source={lottieFiles[fileName]} {...rest} />;
}
