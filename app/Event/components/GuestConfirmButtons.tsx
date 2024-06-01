import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GoldButton from '@/components/buttons/GoldButton';
import { useRouter } from 'expo-router';
import { useModal } from '@/context/ModelContext';
import SuccessRequest from './SuccessRequest';
import GoldButtonOutline from '@/components/buttons/GoldButtonOutline';

const GuestConfirmButtons = () => {
  const router = useRouter();
  const { handleOpen } = useModal();
  return (
    <View style={styles.container}>
      <GoldButton
        title='Confirm'
        onPress={() => handleOpen(<SuccessRequest />)}
      />
      <GoldButtonOutline
        title='Back to explore'
        onPress={() => {
          router.replace('/Home');
        }}
      />
    </View>
  );
};

export default GuestConfirmButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'auto',
    gap: 20,
    paddingTop: 100,
  },
});
