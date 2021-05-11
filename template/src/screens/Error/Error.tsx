import React from 'react';
import { Button, StyleSheet } from 'react-native';
import RNRestart from 'react-native-restart';

import { translate } from '../../core/I18n';
import { Screen, Text, Box, Icon } from '../../theme';

const handleRestart = () => {
  // eslint-disable-next-line new-cap
  RNRestart.Restart();
};

export function Error(): JSX.Element {
  return (
    <Screen>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box padding="m">
          <Icon name="information-circle-outline" size={34} style={styles.icon} />
          <Text variant="headline" marginBottom="s">
            {translate('error.default.title')}
          </Text>
          <Text variant="block">{translate('error.default.message')}</Text>

          <Button onPress={handleRestart} title={translate('error.default.buttonLabel')} />
        </Box>
      </Box>
    </Screen>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: -4,
  },
});
