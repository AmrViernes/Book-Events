import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackScreen from '@/components/stacks/StackScreen';
import { FlashList } from '@shopify/flash-list';
import { homeEvents } from '@/constants/dummy';
import EventCard from '@/components/cards/EventCard';
import {
  backgroundColor,
  darkGrayColor,
  lightColor,
} from '@/constants/Colors';
import SearchInput from '@/components/inputs/SearchInput';

const SearchCategoryScreen = () => {
  const { categoryName } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StackScreen title='Search' />
      <View style={[styles.container, {width: '95%', alignSelf: 'center'}]}>
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
      </View>
    </SafeAreaView>
  );
};

export default SearchCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: backgroundColor
  },
  subContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  filterContainer: {
    backgroundColor: darkGrayColor,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: lightColor,
    marginVertical: 10,
  },
  filterName: {
    color: lightColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
