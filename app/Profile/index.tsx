import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GuestProfile from './components/GuestProfile';
import UserProfile from './components/UserProfile';
import { backgroundColor } from '@/constants/Colors';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {'isLoggedIn' === 'isLoggedIn' ? <UserProfile /> : <GuestProfile />}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: backgroundColor,
  },
});
