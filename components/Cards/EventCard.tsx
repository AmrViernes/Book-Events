import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { darkColor, lightColor } from '@/constants/Colors';
import { ImageBackground } from 'expo-image';
import { BlurView } from 'expo-blur';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface Props {
    title: string;
    location: string;
    dayOfMonth: number;
    month: string;
    imageUrl: string
}

const EventCard = ({title, location, dayOfMonth, month, imageUrl}: Props) => {
  return (
    <ImageBackground style={styles.container} source={imageUrl}>
      <View style={styles.bookmarkContainer}>
        <Feather name='bookmark' size={25} color={lightColor} />
      </View>
      <View style={styles.eventDetailContainer}>
        <BlurView intensity={10} tint='dark' style={styles.eventDetailSubContainer}>
          <View style={styles.eventTitleDetailsContainer}>
            <Text
              style={{ color: lightColor, fontWeight: 'bold', fontSize: 18 }}
            >
              {title}
            </Text>
            <View style={{ flexDirection: 'row', width: '100%', gap: 10 }}>
              <Feather name='map-pin' size={17} color={lightColor} />
              <Text style={{ color: lightColor }}>{location}</Text>
            </View>
          </View>
          <View style={styles.eventDateDetailsContainer}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: lightColor, fontWeight: 'bold', position: 'absolute', fontSize: 16, bottom: -2 }}>
                {dayOfMonth}
              </Text>
              <Text style={{ color: lightColor, fontWeight: 'bold', position: 'absolute', top: -4 }}>
                {month}
              </Text>
            </View>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: darkColor,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
    overflow: 'hidden',
  },
  bookmarkContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderWidth: 0.9,
    padding: 8,
    borderRadius: 50,
    borderColor: lightColor,
    backgroundColor: darkColor,
    opacity: 0.8,
  },
  eventDetailContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 90,
    padding: 10,
  },
  eventDetailSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
    borderWidth: 0.2,
    borderRadius: 7,
    borderColor: lightColor,
    backgroundColor: darkColor,
    opacity: 0.9,
  },
  eventTitleDetailsContainer: {
      flexDirection: 'column',
  },
  eventDateDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: lightColor,
    backgroundColor: '#cccc',
    opacity: 0.8,
    padding: 1,
    height: 42,
    width: 42,
    textAlign: 'center',
  },
});
