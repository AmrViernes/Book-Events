import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import GoldButton from '@/components/GoldButton';
import { useRouter } from 'expo-router';
import { goldColor, lightColor } from '@/constants/Colors';
import { useModal } from '@/app/context/ModelContext';

const SuccessRequest = () => {
  const router = useRouter();
  const { handleClose } = useModal();
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Image
        source={require('@/assets/images/icons/success.svg')}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: goldColor }}>
        Success
      </Text>
      <Text style={{ fontSize: 14, color: lightColor, marginBottom: 20 }}>
        "Your request to join 'The grill house restaurant' was successful. An
        expert will contact you soon."
      </Text>
      <GoldButton
        title='Back to explore'
        onPress={() => {
          router.replace('/Home');
          handleClose();
        }}
      />
    </View>
  );
};

export default SuccessRequest;

const styles = StyleSheet.create({});
