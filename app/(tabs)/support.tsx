import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SupportScreen from '../Support'

const support = () => {
  return (
    <SafeAreaProvider>
      <SupportScreen/>
    </SafeAreaProvider>
  )
}

export default support