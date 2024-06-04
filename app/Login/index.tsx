import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context';
import LogoCard from '@/components/cards/LogoCard';
import LoginForm from './components/LoginForm';

import { goldColor } from '@/constants/Colors';
import NoStackScreen from '@/components/stacks/NoStackScreen';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <NoStackScreen/>
      <LogoCard
        title='Entre Membership ID'
        description='Are you an existing member? Please enter your ID number.'
      >
        <LoginForm />
      </LogoCard>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});