import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { lightColor } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoldButton from '@/components/buttons/GoldButton';
import GuestProfile from './components/GuestProfile';
import UserProfile from './components/UserProfile';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* {'isGust' === 'isGust' && <GuestProfile />} */}

      {'isUser' === 'isUser' && <UserProfile/>}
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
    width: '90%',
  },
  
});
