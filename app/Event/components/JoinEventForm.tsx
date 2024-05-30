import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/inputs/TextInput';
import GoldButton from '@/components/GoldButton';

const JoinEventForm = () => {
  const validationSchema = z.object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters' })
      .max(50, { message: 'Name must be less than 50 characters' }),
    phone: z.coerce.number({ required_error: 'Phone is required' }).gte(0),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: z.infer<typeof validationSchema>) => {
    console.log('Form submitted', data);
  };

  return (
    <View style={styles.container}>
      <Controller
        name='name'
        control={control}
        defaultValue=''
        rules={{ required: true, minLength: 2, maxLength: 100 }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={value => onChange(value)}
            value={value}
            error={errors.name as any}
            errorText={errors?.name?.message as string}
            placeholder='Enter your full name'
            title='Full Name'
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
});
