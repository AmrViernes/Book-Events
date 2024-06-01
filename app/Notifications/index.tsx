import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackScreen from '@/components/Stacks/StackScreen';
import NoNotifications from './components/NoNotifications';
import NotificationItem from './components/NotificationItem';
import {
  Swipeable,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import DeleteNotificationButton from './components/DeleteNotificationButton';

const NoNotificationsData = [
  {
    icon: 'calendar',
    title: 'Upcoming event',
    message: '“City Meeting” is coming soon!',
    date: '3 minutes ago',
  },
  {
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '2 hours ago',
  },
  {
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '1 week ago',
  },
  {
    icon: 'calendar',
    title: 'Upcoming event',
    message: "Book Event” is coming soon! Don't miss out!",
    date: '25 days later',
  },
  {
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '7 hours ago',
  },
  {
    icon: 'calendar',
    title: 'Upcoming event',
    message: "“Party at Hilton” is coming soon! Don't miss out!",
    date: '4 days later',
  },
  {
    icon: 'check',
    title: 'Success message',
    message: 'Your request to join was sent successfully',
    date: '7 hours ago',
  },
];
const index = () => {
  return (
    <View style={styles.scroll}>
      <StackScreen title='Notifications' showHeaderRight={true}/>
      {'noNotifications' !== 'noNotifications' && (
        <View style={styles.container}>
          <NoNotifications />
        </View>
      )}
      <ScrollView style={styles.scroll}>
        <GestureHandlerRootView>
          {NoNotificationsData.map((item, index) => (
            <Swipeable
              key={index}
              renderRightActions={() => DeleteNotificationButton()}
            >
              <NotificationItem
                key={index}
                icon={item.icon}
                title={item.title}
                message={item.message}
                date={item.date}
              />
            </Swipeable>
          ))}
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
