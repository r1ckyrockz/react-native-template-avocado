import React, { PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

export function DismissKeyBoard({
  children,
  ...rest
}: PropsWithChildren<TouchableWithoutFeedbackProps>): JSX.Element {
  const handleOnPress = Keyboard.dismiss;

  return (
    <TouchableWithoutFeedback onPress={handleOnPress} accessible={false} {...rest}>
      {children}
    </TouchableWithoutFeedback>
  );
}
