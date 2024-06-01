import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import StringInput from '@/components/inputs/StringInput';
import GoldButton from '@/components/buttons/GoldButton';
import { joinEventSchema } from '@/validation';
import TextareaInput from '@/components/inputs/TextareaInput';
import { useModal } from '@/context/ModelContext';
import SuccessRequest from './SuccessRequest';
import PhoneInput from 'react-native-international-phone-number';
import { darkColor, goldColor } from '@/constants/Colors';

const JoinEventForm = () => {
  const [charCount, setCharCount] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof joinEventSchema>>({
    resolver: zodResolver(joinEventSchema),
    mode: 'onSubmit',
  });
  const { handleOpen } = useModal();

  const onSubmit = (data: z.infer<typeof joinEventSchema>) => {
    handleOpen(<SuccessRequest />);
  };

  return (
    <View style={styles.container}>
      <Controller
        name='name'
        control={control}
        defaultValue=''
        rules={{ required: true, minLength: 2, maxLength: 100 }}
        render={({ field: { onChange, value } }) => (
          <StringInput
            onChangeText={value => onChange(value)}
            value={value}
            error={errors.name as any}
            errorText={errors?.name?.message as string}
            placeholder='Enter your full name'
            title='Full Name'
          />
        )}
      />
      <Controller
        name='phone'
        control={control}
        defaultValue=''
        rules={{ required: true, minLength: 2, maxLength: 100 }}
        render={({ field: { onChange, value } }) => (
          <>
            <Text style={styles.title}>Phone Number</Text>

            <PhoneInput
              value={value}
              phoneInputStyles={{
                container: {
                  backgroundColor: darkColor,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: errors.phone ? 'red' : goldColor,
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
            {errors.phone && (
              <Text style={styles.errorText}>{errors?.phone?.message}</Text>
            )}
          </>
        )}
      />
      <Controller
        name='notes'
        control={control}
        defaultValue=''
        rules={{ required: false, minLength: 2, maxLength: 200 }}
        render={({ field: { onChange, value } }) => (
          <TextareaInput
            onChangeText={value => {
              onChange(value);
              setCharCount(value.length);
            }}
            maxLength={200}
            charCount={charCount}
            value={value}
            error={errors.notes as any}
            errorText={errors?.notes?.message as string}
            placeholder='Let us know about the service you are looking...'
            title='Add Notes (optional)'
          />
        )}
      />

      <GoldButton title='Submit Request' onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default JoinEventForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    gap: 20,
    width: '100%',
    height: 'auto',
  },
  title: {
    color: '#fff',
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
