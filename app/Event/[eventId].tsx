import { Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import StackScreen from '@/components/StackScreen';
import PagerView from 'react-native-pager-view';
import { BlurView } from 'expo-blur';
import { darkColor, goldColor, lightColor } from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { Ionicons } from '@expo/vector-icons';

const EventDetailsScreen = () => {
  const { eventId } = useLocalSearchParams();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require('@/assets/images/photos/1.png'),
    require('@/assets/images/photos/2.png'),
    require('@/assets/images/photos/3.png'),
  ];

  return (
    <View>
      <StackScreen />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable style={styles.iconContainer} onPress={() => router.back()} >
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
        <PagerView
          style={{ height: 350, width: '100%', position: 'relative' }}
          initialPage={0}
          onPageSelected={e => setCurrentIndex(e.nativeEvent.position)}
        >
          {images.map((image, index) => (
            <View key={index}>
              <Image source={image} style={{ width: '100%', height: '100%' }} />
            </View>
          ))}
        </PagerView>
        <BlurView intensity={80} tint='dark' style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  width: currentIndex === index ? 20 : 10,
                  backgroundColor: currentIndex === index ? goldColor : '#cccc',
                },
              ]}
            />
          ))}
        </BlurView>
      </View>
    </View>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 2,
    width: '100%',
    height: 100,
    padding: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
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
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 50,
  },
  dotsContainer: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  dot: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
