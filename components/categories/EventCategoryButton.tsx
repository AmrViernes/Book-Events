import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { lightGrayColor } from '@/constants/Colors';

interface EventCategoryButtonProps {
  name: string;
  url?: string;
  color?: string;
  pressed?: boolean;
  itemMarginBottom?: number
  onPress: () => void;
}
const EventCategoryButton: React.FC<EventCategoryButtonProps> = ({
  name,
  url,
  color,
  pressed,
  itemMarginBottom,
  onPress,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: itemMarginBottom,
      }}
    >
      <Pressable
        style={[
          styles.container,
          {
            borderColor: pressed ? color : lightGrayColor,
          },
        ]}
        onPress={onPress}
      >
        <Image
          source={url}
          placeholder='Notification'
          style={{ width: 30, height: 30 }}
          contentFit='contain'
        />
      </Pressable>
      <Text
        style={{
          color: pressed ? color : lightGrayColor,
          marginTop: 5,
          fontSize: 15,
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
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 15,
  },
});
