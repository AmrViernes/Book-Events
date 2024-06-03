import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackScreen from '@/components/stacks/StackScreen';
import NoNotifications from './components/NoNotifications';
import NotificationItem from './components/NotificationItem';
import {
  Swipeable,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import DeleteNotificationButton from './components/DeleteNotificationButton';
import { FlashList } from '@shopify/flash-list';
import { notificationsData } from '@/constants/dummy';

const index = () => {
  return (
    <View style={styles.scroll}>
      <StackScreen title='Notifications' showHeaderRight={true} />
      {notificationsData.length === 0 && (
        <View style={styles.container}>
          <NoNotifications />
        </View>
      )}
      {notificationsData.length > 0 && (
        <GestureHandlerRootView>
          <ScrollView style={styles.scroll}>
            <FlashList
              data={notificationsData}
              renderItem={({ item }) => (
                <Swipeable
                  renderRightActions={() => DeleteNotificationButton()}
                >
                  <NotificationItem
                    icon={item.icon}
                    title={item.title}
                    message={item.message}
                    date={item.date}
                  />
                </Swipeable>
              )}
              estimatedItemSize={110}
              keyExtractor={item => String(item.id)}
            />
          </ScrollView>
        </GestureHandlerRootView>
      )}
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
