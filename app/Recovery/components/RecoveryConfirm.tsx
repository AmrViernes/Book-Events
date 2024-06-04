import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { darkColor, goldColor, lightColor, lightGrayColor } from '@/constants/Colors';
import GoldButtonOutline from '@/components/buttons/GoldButtonOutline';
import GoldButton from '@/components/buttons/GoldButton';
import { useRouter } from 'expo-router';

const RecoveryConfirm = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Image
            source={require('@/assets/images/icons/success.svg')}
            style={{ width: 150, height: 150 }}
            contentFit='contain'
          />
          <Text style={styles.textTitle}>Successfully sent </Text>
          <Text style={styles.textDescription}>
            VVIP Member ID has arrived! Please check your text messages.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            gap: 12,
            marginTop: 20,
            width: '100%',
          }}
        >
          <GoldButtonOutline
            title='Not received SMS yet !'
            onPress={() => {}}
          />
          <GoldButton
            title='Back to Login'
            onPress={() => router.replace('/Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default RecoveryConfirm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
    gap: 20,
    backgroundColor: darkColor,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '70%',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textTitle: {
    fontSize: 24,
    color: goldColor,
    marginBottom: 10,
  },
  textDescription: {
    fontSize: 16,
    color: lightGrayColor,
    textAlign: 'center',
  },
});
