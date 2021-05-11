import React from 'react';
import { Platform } from 'react-native';
import { IconProps as NativeIconProps } from 'react-native-vector-icons/Icon';
import NativeIcon from 'react-native-vector-icons/Ionicons';

export type IconProps = {
  withoutPrefix?: boolean;
} & NativeIconProps;

export function Icon({ name, withoutPrefix, ...rest }: IconProps): JSX.Element {
  const prefix = withoutPrefix ? '' : Platform.OS === 'ios' ? 'ios-' : 'md-';

  return <NativeIcon {...rest} name={prefix + name} />;
}
