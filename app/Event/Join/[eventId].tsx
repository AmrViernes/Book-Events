import StackScreen from '@/components/stacks/StackScreen';
import { lightColor } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import JoinUsForm from '@/components/forms/JoinUsForm';
import GuestConfirmButtons from '../components/GuestConfirmButtons';

const JoinUsScreen = () => {
  return (
    <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
      <StackScreen title='Join Us' />

      <View style={styles.container}>
        <Text style={styles.aboutText}>
          Request to join “The grill house restaurant”
        </Text>
        <Text style={styles.aboutEventDescription}>
          Please fill in the information bellow so our expert team can connect
          you and setup your membership.
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/photos/1.png')}
            contentFit='cover'
            style={{ width: '100%', height: 150 }}
          />
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateSubContainer}>
            <Feather name='calendar' size={24} color='white' />
            <Text style={styles.dateText}>
              23 May - Jul 24, 2024 | 09:45 AM
            </Text>
          </View>
          <View style={styles.dateSubContainer}>
            <Feather name='map-pin' size={24} color='white' />
            <Text style={styles.dateText}>Cairo, Egypt</Text>
          </View>
        </View>

        <View style={{ width: '100%' }}>
          {'isGuest' !== 'isGuest' ? <GuestConfirmButtons /> : <JoinUsForm />}
        </View>
      </View>
    </ScrollView>
  );
};

export default JoinUsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingTop: 20,
    width: '90%',
    height: 'auto',
  },
  aboutText: {
    color: lightColor,
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  aboutEventDescription: {
    color: lightColor,
    fontSize: 16,
  },
  imageContainer: {
    borderWidth: 0.3,
    borderColor: lightColor,
    borderRadius: 10,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    marginVertical: 30,
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '98%',
    height: 'auto',
  },
  dateSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 10,
  },
  dateText: {
    color: lightColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
