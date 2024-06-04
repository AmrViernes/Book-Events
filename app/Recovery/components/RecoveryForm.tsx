import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { recoverySchema } from '@/validation';
import { useRouter } from 'expo-router';
import PhoneInput from 'react-native-international-phone-number';
import {
  darkColor,
  goldColor,
  lightColor,
  lightGrayColor,
} from '@/constants/Colors';
import GoldButton from '@/components/buttons/GoldButton';

const RecoveryForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof recoverySchema>>({
    resolver: zodResolver(recoverySchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: z.infer<typeof recoverySchema>) => {
    router.navigate('/Recovery/Confirm');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Enter the Phone number that you used when you joined us.
      </Text>
      <Controller
        name='phoneNumber'
        control={control}
        rules={{ required: true, minLength: 1, maxLength: 1 }}
        render={({ field: { onChange, value } }) => (
          <>
            <Text style={styles.inputTitle}>Phone Number</Text>

            <PhoneInput
              value={value}
              phoneInputStyles={{
                container: {
                  backgroundColor: darkColor,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: errors.phoneNumber ? 'red' : goldColor,
                  width: '100%',
                },
                flagContainer: {
                  borderTopLeftRadius: 7,
                  borderBottomLeftRadius: 7,
                  backgroundColor: darkColor,
                  justifyContent: 'center',
                },
                flag: {},
                caret: {
                  color: '#F3F3F3',
                  fontSize: 14,
                },
                divider: {
                  backgroundColor: '#F3F3F3',
                },
                callingCode: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#F3F3F3',
                },
                input: {
                  color: '#F3F3F3',
                  fontSize: 14,
                },
              }}
              theme='dark'
              defaultCountry='US'
              onChangePhoneNumber={value => onChange(value)}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={(country: React.SetStateAction<any>) =>
                setSelectedCountry(country)
              }
            />
            {errors.phoneNumber && (
              <Text style={styles.errorText}>
                {errors?.phoneNumber?.message}
              </Text>
            )}
          </>
        )}
      />
      <GoldButton title='Submit' onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default RecoveryForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    gap: 20,
    width: '90%',
    height: 'auto',
  },
  title: {
    color: lightGrayColor,
    fontSize: 16,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  inputTitle: {
    color: lightColor,
    fontSize: 16,
    marginBottom: -15,
    alignSelf: 'flex-start',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: -15,
    alignSelf: 'flex-start',
  },
});
