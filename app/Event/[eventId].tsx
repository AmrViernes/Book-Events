import React from 'react';
import { Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  backgroundColor,
  darkColor,
  lightColor,
  lightGrayColor,
} from '@/constants/Colors';
import ImagesStackScreen from '@/components/stacks/ImagesStackScreen';
import ImagesStackIcons from '@/components/stacks/ImagesStackScreen/StackIcons';
import { Image } from 'expo-image';
import MapView from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import GoldButton from '@/components/buttons/GoldButton';

const EventDetailsScreen = () => {
  const { eventId } = useLocalSearchParams();
  const router = useRouter();

  const images = [
    require('@/assets/images/photos/1.png'),
    require('@/assets/images/photos/2.png'),
    require('@/assets/images/photos/3.png'),
  ];

  return (
    <>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <ImagesStackScreen images={images} heightP={333} />
          <ImagesStackIcons />
        </View>
        <View>
          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              fontSize: 20,
              color: 'white',
            }}
          >
            Title Goes Here
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            width: '90%',
            paddingLeft: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={styles.eventTagText}>Restaurant</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Image
              source={require('@/assets/images/photos/e1.png')}
              style={{ width: 30, height: 30, marginRight: -15, zIndex: 2 }}
            />
            <Image
              source={require('@/assets/images/photos/e2.png')}
              style={{ width: 30, height: 30, marginRight: -15, zIndex: 1 }}
            />
            <Image
              source={require('@/assets/images/photos/e3.png')}
              style={{ width: 30, height: 30 }}
            />

            <Text style={{ color: lightGrayColor }}>10,000 + going</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <Feather name='calendar' size={24} color='white' />
            <Text style={styles.dateText}>
              23 May - Jul 24, 2024 | 09:45 AM
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.container,
            {
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
              flexDirection: 'column',
            },
          ]}
        >
          <Text style={styles.aboutText}>About Events</Text>
          <Text style={styles.aboutEventDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dolorem fugiat voluptatibus asperiores odio iste veritatis repellat
            quibusdam dolore, voluptatum earum ipsa placeat iusto libero quia
            exercitationem. Laboriosam, recusandae totam.
          </Text>
          <Pressable style={{ position: 'absolute', bottom: 0, right: 80 }}>
            <Text style={{ color: lightColor, fontWeight: 'bold' }}>
              Read More
            </Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.container,
            {
              borderWidth: 0.3,
              borderRadius: 15,
              overflow: 'hidden',
              width: '90%',
            },
          ]}
        >
          <MapView
            style={{ width: '100%', height: 150, position: 'relative' }}
            mapType='hybrid'
            userInterfaceStyle='dark'
            initialRegion={{
              latitude: 25.072,
              longitude: 55.147,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          <View style={{ position: 'absolute', top: 10, left: 10 }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}
            >
              Location
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              25 min (15 Km)
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.joinButtonContainer}>
        <GoldButton
          title='Request to Join'
          onPress={() => router.push(`/Event/Join/${eventId}`)}
        />
      </View>
    </>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '95%',
    height: 'auto',
  },
  scrollContainer: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: backgroundColor,
  },
  eventTagText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: lightColor,
    borderColor: '#cccc',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 35,
    backgroundColor: darkColor,
    opacity: 0.8,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 10,
    width: '95%',
    height: 50,
    backgroundColor: darkColor,
    opacity: 0.8,
  },
  dateText: {
    color: lightColor,
    textAlign: 'left',
    fontSize: 15,
  },
  aboutText: {
    color: lightColor,
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'flex-start',
    paddingBottom: 5,
  },
  aboutEventDescription: {
    position: 'relative',
    color: lightGrayColor,
    fontSize: 14,
    textAlign: 'left',
  },
  joinButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: backgroundColor,
    height: 90,
    width: '100%',
    paddingHorizontal: 20,
  },
});
