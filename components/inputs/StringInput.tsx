import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { darkColor, goldColor, lightColor } from '@/constants/Colors';

type Props = {
  title: string;
  errorText?: string;
  error?: boolean;
} & TextInput['props'];

const StringInput = (props: Props) => {
  const { ...otherProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View>
      <TextInput
        style={[styles.input, props.error && {borderWidth: 1, borderColor: 'red'}, isFocused && {borderColor: goldColor}]}
        {...otherProps}
        autoComplete='additional-name'
        textContentType='name'
        placeholderTextColor='#ccc'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      </View>
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default StringInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: darkColor,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: lightColor,
    width: '100%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 4,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  }
});
