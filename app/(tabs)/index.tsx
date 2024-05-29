import { StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Explore from '@/app/Home';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <Explore />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
