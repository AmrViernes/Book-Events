import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { lightColor } from '@/constants/Colors';

interface EventCategoryButtonProps {
  name: string;
  url?: string;
  color?: string;
  pressed?: boolean;
  onPress: () => void;
}
const EventCategoryButton: React.FC<EventCategoryButtonProps> = ({
  name,
  url,
  color,
  pressed,
  onPress,
}) => {
  return (
    <View
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Pressable
        style={[
          styles.container,
          {
            borderColor: pressed ? color : lightColor,
          },
        ]}
        onPress={onPress}
      >
        <Image
          source={url}
          placeholder='Notification'
          style={{ width: 35, height: 35 }}
          contentFit='contain'
        />
      </Pressable>
      <Text
        style={{
          color: pressed ? color : lightColor,
          marginTop: 5,
          fontSize: 16,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default EventCategoryButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
  },
});
