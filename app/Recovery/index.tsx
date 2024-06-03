import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackScreen from '@/components/stacks/StackScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RecoveryForm from './components/RecoveryForm';

const RecoveryScreen = () => {
  return (
    <SafeAreaProvider>
      <StackScreen title='Recovery' />
      <RecoveryForm />
    </SafeAreaProvider>
  );
};

export default RecoveryScreen;

const styles = StyleSheet.create({});
