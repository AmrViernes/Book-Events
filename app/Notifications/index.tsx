import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackScreen from '@/components/stacks/StackScreen';
import NoNotifications from './components/NoNotifications';
import NotificationItem from './components/NotificationItem';
import {
  Swipeable,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import DeleteNotificationButton from './components/DeleteNotificationButton';
import { FlashList } from '@shopify/flash-list';
import { notificationsData } from '@/constants/dummy';

const index = () => {
  return (
    <View style={styles.scroll}>
      <StackScreen title='Notifications' showHeaderRight={true} />
      {'noNotifications' !== 'noNotifications' && (
        <View style={styles.container}>
          <NoNotifications />
        </View>
      )}
      <ScrollView style={styles.scroll}>
        <GestureHandlerRootView>
          <FlashList
            data={notificationsData}
            renderItem={({ item }) => (
              <Swipeable renderRightActions={() => DeleteNotificationButton()}>
                <NotificationItem
                  icon={item.icon}
                  title={item.title}
                  message={item.message}
                  date={item.date}
                />
              </Swipeable>
            )}
            estimatedItemSize={110}
            keyExtractor={(item) => String(item.id)}
          />
        </GestureHandlerRootView>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
