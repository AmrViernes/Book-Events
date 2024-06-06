import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NoStackScreen from '@/components/stacks/NoStackScreen'
import OnBoarding from '@/components/OnBoarding'

const index = () => {
  return (
    <View style={styles.container}>
      <NoStackScreen />
      <OnBoarding />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
})