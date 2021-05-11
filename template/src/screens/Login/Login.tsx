import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';

import { AnimationFile, Box, Screen, Text } from '../../theme';
import { FormLoginProvider, LoginFormValues } from './FormProvider';
import { LoginForm } from './components/LoginForm';

const handleSubmit = (data: LoginFormValues) => {
  Alert.alert('Result', JSON.stringify(data));
};

export function Login(): JSX.Element {
  const { navigate } = useNavigation();

  return (
    <Screen>
      <Box flex={2} padding="m" elevation={4}>
        <Box marginTop="xl" justifyContent="center" alignItems="center">
          <AnimationFile fileName="login" autoPlay loop style={styles.logo} />
        </Box>

        <Text variant="headline" textAlign="center">
          Welcome Back!
        </Text>
        <Text variant="light" textAlign="center">
          Login to your existing account
        </Text>

        <FormLoginProvider onSubmit={handleSubmit}>
          <LoginForm />
        </FormLoginProvider>

        <Text
          fontSize={14}
          textAlign="right"
          onPress={() => {
            navigate('Auth', { screen: 'ForgotPassword' });
          }}>
          Forgot Password?
        </Text>
      </Box>

      <Box flex={0.5} justifyContent="flex-end" alignItems="center" marginBottom="l">
        <Text>
          Don't have an account?&nbsp;
          <Text
            variant="link"
            onPress={() => {
              navigate('Auth', { screen: 'Register' });
            }}>
            Sign Up
          </Text>
        </Text>
      </Box>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
  },
});
