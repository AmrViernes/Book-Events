import { StyleSheet, Platform, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExploreScreen from '@/app/Home';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' />
      <ExploreScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
