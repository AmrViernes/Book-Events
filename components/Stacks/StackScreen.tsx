import { Pressable, useColorScheme, StyleSheet, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {
  backgroundColor,
  darkColor,
  goldColor,
  lightColor,
} from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

const StackScreen = ({
  title,
  showHeaderRight = false,
}: {
  title: string;
  showHeaderRight?: boolean;
}) => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: title,
          headerStyle: {
            backgroundColor:
              colorScheme === 'light' ? backgroundColor : backgroundColor,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: 28,
          },
          headerLeft: () => (
            <Pressable
              style={styles.iconContainer}
              onPress={() => router.back()}
            >
              <FontAwesome5 name='arrow-left' size={24} color='white' />
            </Pressable>
          ),
          headerRight: () => (
            <>
              {showHeaderRight && (
                <Pressable onPress={() => {}}>
                  <Text style={{ color: goldColor }}>Clear All</Text>
                </Pressable>
              )}
            </>
          ),
        }}
      />
    </>
  );
};

export default StackScreen;

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    backgroundColor: darkColor,
    opacity: 0.9,
    borderWidth: 0.3,
    borderColor: 'white',
    borderRadius: 50,
  },
});
