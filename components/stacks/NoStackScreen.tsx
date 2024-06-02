import { Stack } from 'expo-router';

const NoStackScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default NoStackScreen;
