import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExploreScreenCategories from '@/components/categories/ExploreScreenCategories';
import EventCard from '@/components/cards/EventCard';
import { useRouter } from 'expo-router';
import NoStackScreen from '@/components/stacks/NoStackScreen';
import { FlashList } from '@shopify/flash-list';
import { homeEvents } from '@/constants/dummy';
import SearchInput from '@/components/inputs/SearchInput';
import { backgroundColor } from '@/constants/Colors';

const ExploreScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <NoStackScreen />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Explore luxury events</Text>
            <Pressable onPress={() => router.push('/Notifications')}>
              <Image
                source={require('@/assets/images/icons/notification.svg')}
                placeholder='Notification'
                style={{ width: 70, height: 70 }}
              />
            </Pressable>
          </View>
          <SearchInput onPress={() => router.push('/Search')} />
        </View>

        <ExploreScreenCategories />

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
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 140,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 65,
    marginBottom: 8
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'sans-serif',
    color: '#fff',
  },
  categoriesContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: backgroundColor,
    marginTop: 20,
    width: '100%',
    height: 140,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
});
