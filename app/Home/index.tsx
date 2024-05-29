import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useColorScheme,
  ScrollView,
  Pressable,
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { darkColor, lightColor } from '@/constants/Colors';
import ExploreScreenCategories from '@/components/Categories/ExploreScreenCategories';
import EventCard from '@/components/Cards/EventCard';
import { useRouter } from 'expo-router';

const Explore = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Explore luxury events</Text>
          <Image
            source={require('@/assets/images/icons/notification.svg')}
            placeholder='Notification'
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='additional-name'
            placeholder='Search all events...'
            placeholderTextColor='#cccc'
          />
          <AntDesign
            name='search1'
            size={22}
            color='#fff'
            style={{ position: 'absolute', left: 37, top: 13 }}
          />
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        <ExploreScreenCategories />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={() => router.push(`/Event/${1}`)}>
          <EventCard
            imageUrl={require('@/assets/images/photos/1.png')}
            dayOfTheMonth={28}
            month={'Des'}
            title={'The Grill House'}
            location={'Lekki, Nigeria'}
          />
        </Pressable>
        <Pressable onPress={() => router.push(`/Event/${2}`)}>
          <EventCard
            imageUrl={require('@/assets/images/photos/2.png')}
            dayOfTheMonth={10}
            month={'Apr'}
            title={'Parking Space'}
            location={'Cebu, Philippines'}
          />
        </Pressable>
        <Pressable onPress={() => router.push(`/Event/${3}`)}>
          <EventCard
            imageUrl={require('@/assets/images/photos/3.png')}
            dayOfTheMonth={3}
            month={'Jan'}
            title={'The Lounge Restaurant'}
            location={'Cairo, Egypt'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 200,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  titleText: {
    fontSize: 28,
    fontFamily: 'sans-serif',
    color: '#fff',
    paddingLeft: 15,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  input: {
    backgroundColor: darkColor,
    color: '#fff',
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 18,
    borderRadius: 12,
    borderColor: lightColor,
    width: 350,
    height: 50,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 4,
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
    height: 100,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
});
