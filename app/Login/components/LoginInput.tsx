import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { darkColor, goldColor, lightColor, lightGrayColor } from '@/constants/Colors';

type Props = {
  errorText?: string;
  error?: boolean;
} & TextInput['props'];

const LoginInput = React.forwardRef((props: Props, ref: any) => {
  const { ...otherProps } = props;

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={[
            styles.input,
            props.error && { borderWidth: 1, borderColor: 'red' },
          ]}
          {...otherProps}
          maxLength={1}
          inputMode='numeric'
          textContentType='creditCardNumber'
          placeholderTextColor={lightGrayColor}
          placeholder='-'
          ref={ref}
        />
      </View>
    </View>
  );
});

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    backgroundColor: darkColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 26,
    color: lightColor,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: goldColor,
    width: 60,
    height: 60,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
});
