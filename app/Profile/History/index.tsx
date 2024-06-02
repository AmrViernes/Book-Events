import StackScreen from '@/components/stacks/StackScreen';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HistoryTabs from './components/HistoryTabs';
import HistoryCard from './components/HistoryCard';
import { FlashList } from '@shopify/flash-list';
import { events } from '@/constants/dummy';

const HistoryScreen = () => {
  const [selected, setSelected] = useState<string>('Pending');
  return (
    <SafeAreaProvider>
      <StackScreen title='History' />
      <SafeAreaView style={styles.container}>
        <HistoryTabs selected={selected} onSelect={setSelected} />
        <GestureHandlerRootView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlashList
              data={events.filter((event) => event.requestStatus === selected)}
              renderItem={({ item }) => (
                <HistoryCard
                  title={item.title}
                  image={item.image}
                  date={item.date}
                  requestStatus={item.requestStatus as any}
                />
              )}
              estimatedItemSize={110}
              keyExtractor={(item) => item.title}
            />
          </ScrollView>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
});
