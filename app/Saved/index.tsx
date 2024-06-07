import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoSaved from './components/NoSaved';
import { backgroundColor, lightColor } from '@/constants/Colors';
import { savedEvents } from '@/constants/dummy';
import { FlashList } from '@shopify/flash-list';
import EventCard from '@/components/cards/EventCard';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

const SavedEventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Events</Text>
      {savedEvents.length === 0 && <NoSaved />}
      {savedEvents.length > 0 && (
        <GestureHandlerRootView style={{ width: '90%', paddingTop: 100 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {savedEvents && (
              <FlashList
                data={savedEvents}
                renderItem={({ item }) => (
                  <EventCard
                    saved={true}
                    shareable={item.shareable}
                    dayOfMonth={item.dayOfMonth}
                    month={item.month}
                    title={item.title}
                    category={item.category}
                    location={item.location}
                    imageUrl={item.image}
                  />
                )}
                estimatedItemSize={110}
                keyExtractor={item => item.title}
              />
            )}
          </ScrollView>
        </GestureHandlerRootView>
      )}
    </View>
  );
};

export default SavedEventsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: backgroundColor,
    paddingBottom: 100,
  },
  title: {
    color: lightColor,
    fontSize: 24,
    height: 71,
    position: 'absolute',
    top: 50,
  },
});
