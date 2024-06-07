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
import { backgroundColor, lightColor } from '@/constants/Colors';

const HistoryScreen = () => {
  const [selected, setSelected] = useState<string>('Pending');
  return (
    <SafeAreaProvider>
      <StackScreen title='History' />
      <SafeAreaView style={styles.container}>
        <HistoryTabs selected={selected} onSelect={setSelected} />
        <GestureHandlerRootView>
          {events.length === 0 && (
            <Text style={styles.noHistoryText}>No history found</Text>
          )}
          {events.length > 0 && (
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlashList
                data={events.filter(event => event.requestStatus === selected)}
                renderItem={({ item }) => (
                  <HistoryCard
                    title={item.title}
                    image={item.image}
                    date={item.date}
                    requestStatus={item.requestStatus as any}
                  />
                )}
                estimatedItemSize={110}
                keyExtractor={item => item.title}
              />
            </ScrollView>
          )}
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
    backgroundColor: backgroundColor,
  },
  noHistoryText: {
    textAlign: 'center',
    fontSize: 18,
    color: lightColor,
    marginTop: 100,
  },
});
