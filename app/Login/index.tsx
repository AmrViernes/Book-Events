import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LogoCard from '@/components/cards/LogoCard';
import LoginForm from './components/LoginForm';
import NoStackScreen from '@/components/stacks/NoStackScreen';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <NoStackScreen />
      <LogoCard
        height={600}
        title='Entre Membership ID'
        description='Are you an existing member? Please enter your ID number.'
      >
        <LoginForm />
      </LogoCard>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
