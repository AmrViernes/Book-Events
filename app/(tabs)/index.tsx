import { StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExploreScreen from '@/app/Home';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ExploreScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
