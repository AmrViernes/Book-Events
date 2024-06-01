import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { goldColor } from '@/constants/Colors';

interface GoldButtonProps {
  title: string;
  onPress: () => void;
}

const GoldButtonOutline = ({ title, onPress }: GoldButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textTitle}>{title}</Text>
    </Pressable>
  );
};

export default GoldButtonOutline;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderWidth: 1,
    borderColor: goldColor,
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
    color: goldColor,
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
