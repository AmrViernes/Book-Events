import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ContactCard from './components/ContactCard';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.cardsContainer}>
        <ContactCard
          icon='phone'
          title='Phone Number'
          message='+20 012 345 6789'
        />
        <ContactCard
          icon='envelope-o'
          title='Email Address'
          message='example@example.com'
        />
        <ContactCard
          icon='whatsapp'
          title='WhatsApp'
          message='+20 012 345 6789'
        />
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
});
