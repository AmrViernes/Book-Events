import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileButtonsMenu from './ProfileButtonsMenu';
import { darkColor, lightColor } from '@/constants/Colors';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LR</Text>
        </View>

        <Text style={styles.name}>Lujain Rashed</Text>
        <Text style={styles.phoneNumber}>+20 0123456789</Text>
      </View>

      <ProfileButtonsMenu isLoggedIn={true} />
    </View>
  );
};

export default UserProfile;

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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkColor,
    height: 90,
    width: 90,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: lightColor,
  },
  name: {
    fontSize: 22,
    color: lightColor,
  },
  phoneNumber: {
    fontSize: 16,
    color: lightColor,
  },
});
