import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  darkColor,
  darkGrayColor,
  goldColor,
  lightColor,
  lightGrayColor,
  mediumGrayColor,
} from '@/constants/Colors';
import { ImageBackground } from 'expo-image';
import { BlurView } from 'expo-blur';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
  category?: string;
  location: string;
  dayOfMonth: number;
  month: string;
  imageUrl: string;
  saved?: boolean;
  shareable?: boolean;
}

const EventCard = ({
  title,
  location,
  dayOfMonth,
  month,
  imageUrl,
  category,
  saved = false,
  shareable = false,
}: Props) => {
  return (
    <ImageBackground style={styles.container} source={imageUrl}>
      {category && (
        <View style={styles.categoryNameContainer}>
          <Text style={styles.categoryName}>{category}</Text>
        </View>
      )}
      {shareable && (
        <View style={styles.shareButtonContainer}>
          <Feather name='share-2' size={20} color={lightColor} />
        </View>
      )}
      <View style={styles.bookmarkButtonContainer}>
        <Ionicons
          name={saved ? 'bookmark' : 'bookmark-outline'}
          size={20}
          color={saved ? goldColor : lightColor}
        />
      </View>
      <View style={styles.eventDetailContainer}>
        <BlurView
          intensity={50}
          tint='systemUltraThinMaterialDark'
          style={styles.eventDetailSubContainer}
        >
          <View style={styles.eventTitleDetailsContainer}>
            <Text
              style={{ color: lightColor, fontWeight: 'bold', fontSize: 15 }}
            >
              {title}
            </Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', width: '100%', gap: 3 }}>
              <Feather name='map-pin' size={16} color={lightColor} />
              <Text style={{ color: lightColor, fontSize: 14 }}>{location}</Text>
            </View>
          </View>
          <View style={styles.eventDateDetailsContainer}>
            <Text
              style={{
                color: lightColor,
                fontWeight: 'bold',
                fontSize: 14,
                position: 'absolute',
                top: 1
              }}
            >
              {dayOfMonth}
            </Text>
            <Text
              style={{
                color: lightColor,
                fontWeight: 'bold',
                fontSize: 13,
                position: 'absolute',
                bottom: 6
              }}
            >
              {month}
            </Text>
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
    borderRadius: 15,
    marginVertical: 8,
    overflow: 'hidden',
  },
  categoryNameContainer: {
    position: 'absolute',
    top: 18,
    left: 18,
    borderWidth: 0.6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    borderColor: lightColor,
    backgroundColor: darkColor,
    opacity: 0.8,
  },
  categoryName: {
    color: lightColor,
    fontWeight: 'bold',
  },
  bookmarkButtonContainer: {
    position: 'absolute',
    top: 18,
    right: 18,
    borderWidth: 1,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: lightColor,
    backgroundColor: darkColor,
    opacity: 0.8,
  },
  shareButtonContainer: {
    position: 'absolute',
    top: 18,
    right: 60,
    borderWidth: 1,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
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
    borderRadius: 10,
    borderColor: lightColor,
    backgroundColor: darkColor,
    opacity: 0.9,
    overflow: 'hidden',
  },
  eventTitleDetailsContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  eventDateDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: lightColor,
    backgroundColor: mediumGrayColor,
    height: 40,
    width: 40,
  },
});
