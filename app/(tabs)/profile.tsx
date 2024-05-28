import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ProfileScreen from '../ProfileScreen'

const profile = () => {
  return (
    <SafeAreaProvider>
      <ProfileScreen />
    </SafeAreaProvider>
  )
}

export default profile

const styles = StyleSheet.create({})