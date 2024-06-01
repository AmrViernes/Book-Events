import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { darkColor, goldColor, lightColor } from '@/constants/Colors';

type Props = {
    icon: string;
    title: string;
    message: string;
    date: string
};
const NotificationItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Feather name={props.icon as any} size={26} color={goldColor} />
      </View>
      <View style={{ marginLeft: 10, width: '60%' }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>
          {props.message}
        </Text>
      </View>
      <View style={{ marginLeft: 'auto', alignSelf: 'flex-start' }}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: 100,
    marginVertical: 5,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkColor,
    padding: 10,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: lightColor,
  },
  message: {
    fontSize: 16,
    color: lightColor,
  },
  date:{
    color: lightColor,
    fontSize: 13,
    paddingVertical: 12
  }
});
