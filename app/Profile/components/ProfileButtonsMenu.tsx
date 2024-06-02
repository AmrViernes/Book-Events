import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';
import { darkColor, lightColor, lightGrayColor } from '@/constants/Colors';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileButtonsMenu = ({
  isLoggedIn = false,
}: {
  isLoggedIn: boolean;
}) => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      {isLoggedIn && (
        <Pressable
          style={styles.buttonContainer}
          onPress={() => router.push('/Profile/History')}
        >
          <Octicons name='history' size={24} color={lightGrayColor} />
          <Text style={styles.title}>History</Text>
        </Pressable>
      )}
      <Pressable
        style={[styles.buttonContainer, { justifyContent: 'space-between' }]}
        onPress={() => router.push('/Profile/Languages')}
      >
        <View style={styles.languageContainer}>
          <Octicons name='globe' size={24} color={lightGrayColor} />
          <Text style={styles.title}>Language</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text style={{ color: '#cccc' }}>(En)Language</Text>
          <MaterialIcons
            name='keyboard-arrow-right'
            size={24}
            color={lightGrayColor}
          />
        </View>
      </Pressable>

      <Pressable style={styles.buttonContainer}>
        <Octicons name='lock' size={24} color={lightGrayColor} />
        <Text style={styles.title}>Privacy policy</Text>
      </Pressable>

      <Pressable style={styles.buttonContainer}>
        <MaterialCommunityIcons
          name='file-document-outline'
          size={24}
          color={lightGrayColor}
        />
        <Text style={styles.title}>Terms and conditions</Text>
      </Pressable>

      <Pressable
        style={[
          styles.buttonContainer,
          { justifyContent: 'space-between', paddingVertical: 1 },
        ]}
      >
        <View style={styles.languageContainer}>
          <MaterialCommunityIcons
            name='bell-ring-outline'
            size={24}
            color={lightGrayColor}
          />
          <Text style={styles.title}>Push notification</Text>
        </View>

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Pressable>

      {isLoggedIn && (
        <Pressable style={styles.buttonContainer}>
          <MaterialIcons name='logout' size={24} color={lightGrayColor} />
          <Text style={styles.title}>Log out</Text>
        </Pressable>
      )}
    </View>
  );
};

export default ProfileButtonsMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 15,
    width: '90%',
    paddingTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: darkColor,
  },
  title: {
    color: lightGrayColor,
    fontSize: 20,
    marginLeft: 10,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
