import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { goldColor } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

interface GoldButtonProps {
  title: string;
  onPress: () => void;
}

const GoldButton = ({ title, onPress }: GoldButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={['#E9CD7E', '#B09040', '#685830']}
        style={styles.background}
      />
      <Text style={styles.textTitle}>{title}</Text>
    </Pressable>
  );
};

export default GoldButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: goldColor,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
});
