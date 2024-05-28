import { StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Explore from '../ExploreScreen';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <Explore />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
