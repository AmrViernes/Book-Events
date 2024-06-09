import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { darkColor, goldColor, lightColor, lightGrayColor } from '@/constants/Colors';
import PagerView from 'react-native-pager-view';
import { Image } from 'expo-image';
import GoldButton from './buttons/GoldButton';
import { LinearGradient } from 'expo-linear-gradient';

const images = [
    {
      image: require('@/assets/images/photos/intro1.png'),
    description: 'Experience luxury made simple. Let us take care of everything for you.'
    },
    {
      image: require('@/assets/images/photos/intro2.png'),
    description: 'Simplifying your life, from business trips to family vacations.'
    },
    {
      image: require('@/assets/images/photos/intro3.png'),
    description: "Seize the opportunity to experience the world's most incredible events."
    },
];

const OnBoarding = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <PagerView
        style={[styles.pagerView, { flexDirection: 'row-reverse' }]}
        initialPage={0}
        onPageSelected={e => setCurrentIndex(e.nativeEvent.position)}
      >
        {images.map((item, index) => (
          <View key={index}>
            <LinearGradient
              colors={['transparent', darkColor]}
              style={styles.blurBackground}
            />
            <Image
              source={item.image}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        ))}
      </PagerView>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to VVIP luxury concierge </Text>
        {images.map(
          (item, index) =>
            index === currentIndex && (
              <Text key={index} style={styles.description}>
                {item.description}
              </Text>
            )
        )}
      </View>

      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: currentIndex === index ? 26 : 7,
                backgroundColor: currentIndex === index ? goldColor : '#cccc',
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <GoldButton
          title='Get Started'
          onPress={() => router.replace('/Login')}
        />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  pagerView: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  dotsContainer: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 130,
    right: 0,
    left: 0,
  },
  dot: {
    flexDirection: 'row',
    height: 7,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    backgroundColor: darkColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 102,
    bottom: 0,
    right: 0,
    left: 0,
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: 250,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: lightColor,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 10,
  },
  description: {
    color: lightGrayColor,
    fontSize: 18,
    textAlign: 'left',
  },
});