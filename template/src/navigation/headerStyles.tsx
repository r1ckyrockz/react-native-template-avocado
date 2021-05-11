import { Theme } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';

import { translate } from '../core/I18n';

type DefaultScreenOptionsReturnValues = {
  headerStyle: {
    backgroundColor: string;
  };
  headerTintColor: string;
};

export const defaultScreenOptions = (theme: Theme): DefaultScreenOptionsReturnValues => ({
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: 'white',
});

export const defaultNavigatorOptions = { headerBackTitleVisible: false };

export const headerStyles = {
  ...defaultNavigatorOptions,
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  cardOverlayEnabled: true,
};

type ModalOptionsReturnValues = Record<string, unknown> & {
  title: string;
};

export const modalOptions = (title: string, goBack: () => void): ModalOptionsReturnValues => ({
  title,
  headerStatusBarHeight: 10,
  headerLeft: () => null,
  headerRight: () => (
    <Button
      title={translate('general.cancel')}
      onPress={() => {
        goBack();
      }}
    />
  ),
});
