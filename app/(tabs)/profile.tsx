import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ProfileScreen from '@/app/Profile'

const profile = () => {
  return (
    <SafeAreaProvider>
      <ProfileScreen />
    </SafeAreaProvider>
  )
}

export default profile