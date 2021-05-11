import React from 'react';
import { ScrollView } from 'react-native';

import { translate } from '../../core/I18n';
import { AnimationFile, Box, Screen, Text } from '../../theme';

export function NoInternet(): JSX.Element {
  return (
    <Screen>
      <Box flex={0.5} bg="primary" paddingTop="xl">
        <Box flex={1}>
          <AnimationFile fileName="noInternetConnection" autoPlay loop />
        </Box>
      </Box>
      <ScrollView>
        <Box flex={1} alignItems="center" marginTop="l">
          <Text variant="headline">{translate('error.noConnection.title')}</Text>
          <Text variant="light" padding="l" textAlign="center">
            {translate('error.noConnection.message')}
          </Text>
        </Box>
      </ScrollView>
    </Screen>
  );
}
