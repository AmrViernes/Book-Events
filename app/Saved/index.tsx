import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NoSaved from './components/NoSaved';

const SavedEventsScreen = () => {
  return (
    <View>
      {'noSavedItems' !== 'noSavedItems' && (
        <View style={styles.container}>
          <NoSaved />
        </View>
      )}
    </View>
  );
}

export default SavedEventsScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});