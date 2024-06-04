import React, { useRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { loginSchema } from '@/validation';
import LoginInput from './LoginInput';
import GoldButton from '@/components/buttons/GoldButton';
import { goldColor, lightColor, lightGrayColor } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import GoldButtonOutline from '@/components/buttons/GoldButtonOutline';

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const firstInputRef = useRef<TextInput | null>(null);
  const secondInputRef = useRef<TextInput | null>(null);
  const thirdInputRef = useRef<TextInput | null>(null);
  const fourthInputRef = useRef<TextInput | null>(null);
  const fifthInputRef = useRef<TextInput | null>(null);

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Controller
          name='firstInput'
          control={control}
          rules={{ required: true, minLength: 1, maxLength: 1 }}
          render={({ field: { onChange, value } }) => (
            <LoginInput
              onChangeText={value => {
                onChange(value);
                /^[0-9]*$/.test(value) &&
                  value !== '' &&
                  secondInputRef.current?.focus();
              }}
              error={errors.firstInput as any}
              errorText={errors?.firstInput?.message as string}
              autoFocus={true}
              ref={firstInputRef}
            />
          )}
        />
        <Controller
          name='secondInput'
          control={control}
          rules={{ required: true, minLength: 1, maxLength: 1 }}
          render={({ field: { onChange, value } }) => (
            <LoginInput
              onChangeText={value => {
                onChange(value);
                if (/^[0-9]*$/.test(value) && value !== '') {
                  thirdInputRef.current?.focus();
                } else if (value === '') {
                  firstInputRef.current?.focus();
                }
              }}
              error={errors.secondInput as any}
              errorText={errors?.secondInput?.message as string}
              ref={secondInputRef}
            />
          )}
        />
        <Controller
          name='thirdInput'
          control={control}
          rules={{ required: true, minLength: 1, maxLength: 1 }}
          render={({ field: { onChange, value } }) => (
            <LoginInput
              onChangeText={value => {
                onChange(value);
                if (/^[0-9]*$/.test(value) && value !== '') {
                  fourthInputRef.current?.focus();
                } else if (value === '') {
                  secondInputRef.current?.focus();
                }
              }}
              error={errors.thirdInput as any}
              errorText={errors?.thirdInput?.message as string}
              ref={thirdInputRef}
            />
          )}
        />
        <Controller
          name='fourthInput'
          control={control}
          rules={{ required: true, minLength: 1, maxLength: 1 }}
          render={({ field: { onChange, value } }) => (
            <LoginInput
              onChangeText={value => {
                onChange(value);
                if (/^[0-9]*$/.test(value) && value !== '') {
                  fifthInputRef.current?.focus();
                } else if (value === '') {
                  thirdInputRef.current?.focus();
                }
              }}
              error={errors.fourthInput as any}
              errorText={errors?.fourthInput?.message as string}
              ref={fourthInputRef}
            />
          )}
        />
        <Controller
          name='fifthInput'
          control={control}
          rules={{ required: true, minLength: 1, maxLength: 1 }}
          render={({ field: { onChange, value } }) => (
            <LoginInput
              onChangeText={value => {
                onChange(value);
                value === '' && fourthInputRef.current?.focus();
              }}
              error={errors.fifthInput as any}
              errorText={errors?.fifthInput?.message as string}
              ref={fifthInputRef}
            />
          )}
        />

      {(errors.firstInput ||
        errors.secondInput ||
        errors.thirdInput ||
        errors.fourthInput ||
        errors.fifthInput) && (
        <Text style={{ color: 'red', fontSize: 14, position: 'absolute', bottom: -25 }}>
          Member ID must be a number.
        </Text>
      )}
      </View>

      <View>
        <Pressable onPress={() => router.push('/Recovery')}>
          <Text style={{ color: goldColor, paddingVertical: 20, fontSize: 16 }}>
            Forgot your member ID?
          </Text>
        </Pressable>
        <GoldButton onPress={handleSubmit(onSubmit)} title='Login' />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <Text style={{ color: lightGrayColor, fontSize: 14 }}>
          Not a member?
        </Text>
        <GoldButtonOutline
          title='Continue as guest'
          onPress={() => router.push('/Home')}
        />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    width: '95%',
    justifyContent: 'space-around',
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '20.7%',
  },
  focusStick: {
    backgroundColor: goldColor,
  },
  activePinCodeContainer: {
    borderColor: goldColor,
  },
  pinCodeContainer: {
    borderWidth: 1,
    width: 60,
    height: 60,
  },
  pinCodeText: {
    color: goldColor,
  },
});
