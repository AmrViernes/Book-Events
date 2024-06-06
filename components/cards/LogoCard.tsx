import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  backgroundColor,
  darkColor,
  lightColor,
  lightGrayColor,
} from '@/constants/Colors';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  height: number
}

const LogoCard = ({ children, title, description, height }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/pattern/Pattern.svg')}
        contentFit='cover'
        style={styles.pattern}
      />
      <Image
        source={require('@/assets/images/icon.png')}
        contentFit='cover'
        style={{ width: 80, height: 80, marginBottom: 30, zIndex: 2 }}
      />
      <View style={[styles.cardsContainer, {height: height}]}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textDescription}>{description}</Text>
        </View>
        {children}
      </View>
    </View>
  );
};

export default LogoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pattern: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: darkColor,
  },
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 600,
    backgroundColor: backgroundColor,
    paddingTop: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 16,
    gap: 5,
  },
  textTitle: {
    fontSize: 20,
    color: lightColor,
  },
  textDescription: {
    fontSize: 15,
    color: lightGrayColor,
  },
});
