import { SafeAreaProvider } from 'react-native-safe-area-context';
import SavedEventsScreen from '../Saved';

const Saved = () => {
  return (
    <SafeAreaProvider>
      <SavedEventsScreen />
    </SafeAreaProvider>
  );
};

export default Saved;
