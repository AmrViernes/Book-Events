import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { darkColor } from '@/constants/Colors';

const DeleteNotificationButton = () => {
  return (
    <View style={styles.deleteButtonContainer}>
      <Pressable onPress={() => {}}>
        <Feather name="trash-2" color={'red'} size={28} style={styles.deleteButton} />
      </Pressable>
    </View>
  );
};

export default DeleteNotificationButton;

const styles = StyleSheet.create({
  deleteButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: darkColor,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});
