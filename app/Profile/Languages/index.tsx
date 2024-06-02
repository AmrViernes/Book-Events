import { darkColor, goldColor, lightGrayColor } from '@/constants/Colors';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StackScreen from '@/components/stacks/StackScreen';
import { Languages } from '@/constants/dummy';

const LanguagesScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  return (
    <View style={styles.container}>
      <StackScreen title='Language' />
      {Languages.map(language => (
        <Pressable
          key={language.code}
          style={styles.buttonContainer}
          onPress={() => setSelectedLanguage(language.code)}
        >
          <View style={styles.languageContainer}>
            <Text style={styles.title}>{language.name}</Text>
          </View>
          {language.code === selectedLanguage && (
            <AntDesign name='checksquareo' size={24} color={goldColor} />
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default LanguagesScreen;

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
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    padding: 13,
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
