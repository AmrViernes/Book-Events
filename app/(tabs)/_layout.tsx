import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 13,
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/icons/explore-pressed.svg')
                  : require('@/assets/images/icons/explore-normal.svg')
              }
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/icons/bookmark-pressed.svg')
                  : require('@/assets/images/icons/bookmark-normal.svg')
              }
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='support'
        options={{
          title: 'Support',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/icons/support-pressed.svg')
                  : require('@/assets/images/icons/support-normal.svg')
              }
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/icons/user-pressed.svg')
                  : require('@/assets/images/icons/user-normal.svg')
              }
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
