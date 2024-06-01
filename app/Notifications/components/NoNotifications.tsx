import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { lightColor } from '@/constants/Colors';

const NoNotifications = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/icons/notificationHome.svg')}
        style={{ width: 150, height: 150 }}
        contentFit="contain"
      />
      <Text style={styles.textTitle}>Notification is empty</Text>
      <Text style={styles.textDescription}>
        We’ll let you know when there will be something to update you.
      </Text>
    </View>
  );
};

export default NoNotifications;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  textTitle: {
    fontSize: 22,
    color: lightColor,
  },
  textDescription: {
    fontSize: 16,
    color: lightColor,
    textAlign: 'center',
  },
});
