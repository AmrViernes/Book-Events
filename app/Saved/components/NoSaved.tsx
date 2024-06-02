import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { lightColor } from '@/constants/Colors';

const NoSaved = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/photos/noSavedIcon.svg')}
        style={{ width: 150, height: 150 }}
        contentFit='contain'
      />
      <Text style={styles.textTitle}>Saved is empty</Text>
      <Text style={styles.textDescription}>
        No saved events yet. Discover and save your favorites by tapping the
        save icon on events.
      </Text>
    </View>
  );
};

export default NoSaved;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
