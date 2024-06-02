import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoldButton from '@/components/buttons/GoldButton';
import { lightColor } from '@/constants/Colors';
import ProfileButtonsMenu from './ProfileButtonsMenu';
import { useRouter } from 'expo-router';

const GuestProfile = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Text style={styles.title}>Welcome to VVIP</Text>
        <Text style={styles.description}>
          Enjoy a special experience with VVIP!
        </Text>
        <Text style={styles.description}>Join us now!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <GoldButton
          title='Join us now'
          onPress={() => router.push('/Profile/JoinUs')}
        />
      </View>

      <ProfileButtonsMenu isLoggedIn={false} />
    </View>
  );
}

export default GuestProfile

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: lightColor,
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    color: lightColor,
  },
});