import React from 'react';
import { Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { darkColor, lightColor } from '@/constants/Colors';
import ImagesStackScreen from '@/components/Stacks/ImagesStackScreen';
import ImagesStackIcons from '@/components/Stacks/ImagesStackScreen/StackIcons';
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
    <View>
      <View style={styles.headerContainer}>
        <ImagesStackScreen images={images} />
        <ImagesStackIcons />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
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

        <View style={styles.container}>
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
              style={{ width: 40, height: 40, marginRight: -15, zIndex: 2 }}
            />
            <Image
              source={require('@/assets/images/photos/e2.png')}
              style={{ width: 40, height: 40, marginRight: -15, zIndex: 1 }}
            />
            <Image
              source={require('@/assets/images/photos/e3.png')}
              style={{ width: 40, height: 40 }}
            />

            <Text style={{ color: lightColor }}>10,000 + going</Text>
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
          <Pressable style={{ position: 'absolute', bottom: 0, right: 60 }}>
            <Text style={styles.aboutText}>Read More</Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.container,
            { borderWidth: 0.3, borderRadius: 15, overflow: 'hidden' },
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

        <View style={[styles.container, { marginVertical: 30 }]}>
          <GoldButton
            title='Request to Join'
            onPress={() => router.push(`/Event/Join/${eventId}`)}
          />
        </View>
      </ScrollView>
    </View>
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
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '100%',
    height: '50%',
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
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: 10,
    width: '95%',
    height: 50,
    backgroundColor: darkColor,
    opacity: 0.8,
  },
  dateText: {
    color: lightColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  aboutText: {
    color: lightColor,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  aboutEventDescription: {
    position: 'relative',
    color: lightColor,
    fontSize: 14,
  },
});
