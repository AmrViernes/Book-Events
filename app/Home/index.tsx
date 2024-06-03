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
import { darkColor, lightColor, lightGrayColor } from '@/constants/Colors';
import ExploreScreenCategories from '@/components/categories/ExploreScreenCategories';
import EventCard from '@/components/cards/EventCard';
import { useRouter } from 'expo-router';
import NoStackScreen from '@/components/stacks/NoStackScreen';
import { FlashList } from '@shopify/flash-list';
import { homeEvents } from '@/constants/dummy';

const ExploreScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <NoStackScreen />
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Explore luxury events</Text>
          <Pressable onPress={() => router.push('/Notifications')}>
            <Image
              source={require('@/assets/images/icons/notification.svg')}
              placeholder='Notification'
              style={{ width: 80, height: 80 }}
            />
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='additional-name'
            placeholder='Search all events...'
            placeholderTextColor={lightGrayColor}
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
        <FlashList
          data={homeEvents}
          renderItem={({ item }) => (
            <Pressable onPress={() => router.push(`/Event/${2}`)}>
              <EventCard
                title={item.title}
                imageUrl={item.image}
                dayOfMonth={item.dayOfMonth}
                month={item.month}
                location={item.location}
              />
            </Pressable>
          )}
          estimatedItemSize={110}
          keyExtractor={item => item.title}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

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
