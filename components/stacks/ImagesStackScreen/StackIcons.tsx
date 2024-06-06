import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { darkColor } from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ImagesStackIcons = () => {
  const router = useRouter();
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.iconContainer} onPress={() => router.back()}>
        <FontAwesome5 name='arrow-left' size={24} color='white' />
      </Pressable>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable style={styles.iconContainer}>
          <Octicons name='bookmark' size={24} color='white' />
        </Pressable>
        <Pressable style={styles.iconContainer}>
          <Ionicons name='share-social-outline' size={24} color='white' />
        </Pressable>
      </View>
    </View>
  );
};

export default ImagesStackIcons;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    height: 90,
    paddingHorizontal: 30,
    zIndex: 1,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    backgroundColor: darkColor,
    opacity: 0.9,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
});
