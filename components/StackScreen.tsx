import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { darkColor, lightColor } from '../constants/Colors';
import { Image } from 'expo-image';

const StackScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerShown: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorScheme === 'light' ? lightColor : darkColor,
          },
          headerTintColor: darkColor,
        }}
      />
    </>
  );
};

export default StackScreen;
