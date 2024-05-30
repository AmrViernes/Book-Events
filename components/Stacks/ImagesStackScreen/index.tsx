import { useState } from 'react';
import { View, useColorScheme, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { darkColor, goldColor, lightColor } from '@/constants/Colors';
import PagerView from 'react-native-pager-view';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';

const ImagesStackScreen = ({ images }: { images: string[] }) => {
  const colorScheme = useColorScheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerShown: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorScheme === 'light' ? lightColor : darkColor,
          },
          headerTintColor: darkColor,
        }}
      />

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
    </>
  );
};

export default ImagesStackScreen;

const styles = StyleSheet.create({
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
