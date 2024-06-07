import {
  backgroundColor,
  darkColor,
  goldColor,
  lightGrayColor,
} from '@/constants/Colors';
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  I18nManager,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StackScreen from '@/components/stacks/StackScreen';
import { Languages } from '@/constants/dummy';
import GoldButton from '@/components/buttons/GoldButton';
import RNRestart from 'react-native-restart';

const LanguagesScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  const toggleRTL = (selectedLanguage: string) => {
    const isSelectedLanguageRTL =
      selectedLanguage === 'ar' || selectedLanguage === 'he';
    I18nManager.forceRTL(isSelectedLanguageRTL);

    Alert.alert(
      'Reload required',
      'The app needs to reload to apply the changes.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Reload',
          onPress: () => {
            setIsRTL(isSelectedLanguageRTL);
            setSelectedLanguage(selectedLanguage);
            RNRestart.restart();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <StackScreen title='Language' />
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
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
      <View
        style={{
          width: '90%',
          flexDirection: 'column',
          paddingVertical: 20,
          alignItems: 'center',
        }}
      >
        <GoldButton
          title='Change Language'
          onPress={() => toggleRTL(selectedLanguage)}
        />
      </View>
    </View>
  );
};

export default LanguagesScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    gap: 15,
    width: '100%',
    height: '100%',
    paddingTop: 50,
    backgroundColor: backgroundColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
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
