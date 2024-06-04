import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackScreen from '@/components/stacks/StackScreen';
import { FlashList } from '@shopify/flash-list';
import { homeEvents } from '@/constants/dummy';
import EventCard from '@/components/cards/EventCard';
import {
  darkGrayColor,
  lightColor,
  lightDarkColor,
  lightGrayColor,
} from '@/constants/Colors';
import SearchInput from '@/components/inputs/SearchInput';

const SearchCategoryScreen = () => {
  const { categoryName } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StackScreen title='Search' />

      <SearchInput />
      <View style={styles.subContainer}>
        <View style={styles.filterContainer}>
          <Text style={styles.filterName}>{categoryName}</Text>
          <Pressable onPress={() => router.back()}>
            <Text style={{ color: lightColor, fontWeight: 'bold' }}>X</Text>
          </Pressable>
        </View>
      </View>
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
    </SafeAreaView>
  );
};

export default SearchCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    alignSelf: 'center',
    width: '95%',
  },
  subContainer: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    position: 'relative',
  },
  filterContainer: {
    backgroundColor: darkGrayColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    padding: 8,
    borderWidth: 0.5,
    borderColor: lightColor,
    borderRadius: 10,
    marginHorizontal: 'auto',
    marginBottom: 10,
    position: 'absolute',
    top: -10,
    left: 0,
  },
  filterName: {
    color: lightColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
