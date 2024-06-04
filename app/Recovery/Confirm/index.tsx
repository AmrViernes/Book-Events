import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NoStackScreen from '@/components/stacks/NoStackScreen';
import RecoveryConfirm from '../components/RecoveryConfirm';

const RecoverySuccessScreen = () => {
  return (
    <SafeAreaView>
      <NoStackScreen />
      <RecoveryConfirm />
    </SafeAreaView>
  );
};

export default RecoverySuccessScreen;
