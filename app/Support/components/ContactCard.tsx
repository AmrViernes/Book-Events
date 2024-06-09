import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { darkColor, lightColor, lightGrayColor } from '@/constants/Colors';

interface Props {
    icon: string;
    title: string;
    message: string;    
}

const ContactCard = ({ icon, title, message }: Props ) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.contactItemContainer}>
        <View style={styles.iconContainer}>
        <FontAwesome name={icon as any} size={20} color={lightColor} />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.titleSmall}>{title}</Text>
        <Text style={styles.title}>{message}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ContactCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 15,
    width: '90%',
    paddingTop: 15,
  },
  contactItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 80,
    gap: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: darkColor,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkColor,
    borderWidth: 1,
    borderRadius: 30,
    height: 40,
    width: 40,
    borderColor: lightColor,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
    marginLeft: 10,
  },
  titleSmall: {
    color: lightGrayColor,
    fontSize: 12,
  },
  title: {
    color: lightColor,
    fontSize: 16,
  },
});