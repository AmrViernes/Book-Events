import JoinUsForm from '@/components/forms/JoinUsForm';
import StackScreen from '@/components/stacks/StackScreen';
import { lightColor } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JoinUsScreen = () => {
  return (
    <View style={styles.container}>
      <StackScreen title='Join us' />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Request to join us</Text>
        <Text style={styles.textDescription}>
          Please fill in the information bellow so our expert team can connect
          you and setup your membership.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <JoinUsForm />
      </View>
    </View>
  );
};

export default JoinUsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '90%',
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  textTitle: {
    fontSize: 22,
    color: lightColor,
  },
  textDescription: {
    fontSize: 14,
    color: lightColor,
    textAlign: 'left',
  },
});
