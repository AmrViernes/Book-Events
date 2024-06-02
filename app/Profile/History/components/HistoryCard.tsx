import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import {
  darkColor,
  goldColor,
  lightColor,
  lightGrayColor,
} from '@/constants/Colors';

interface CardProps {
  image: string;
  title: string;
  date: string;
  requestStatus: 'Pending' | 'Completed';
}

const HistoryCard = ({ title, image, date, requestStatus }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={{ width: 80, height: 80, borderRadius: 10 }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: 'bold', color: lightColor }}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Feather name='calendar' size={15} color={lightGrayColor} />
          <Text style={{ color: lightGrayColor }}>{date}</Text>
        </View>
        <Text style={{ color: lightColor }}>Request sent</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={{
            fontSize: 11,
            color: requestStatus === 'Pending' ? goldColor : lightGrayColor,
          }}
        >
          {requestStatus}
        </Text>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: darkColor,
    padding: 15,
    width: '90%',
    height: 120,
    marginVertical: 5,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '30%',
    height: '100%',
    overflow: 'hidden',
    paddingRight: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 28,
    width: '20%',
    backgroundColor: darkColor,
    borderRadius: 5,
  },
});
