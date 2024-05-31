import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { darkColor, goldColor, lightColor } from '@/constants/Colors';

type Props = {
  title: string;
  errorText?: string;
  error?: boolean;
  charCount?: number
} & TextInput['props'];

const TextareaInput = (props: Props) => {
  const { ...otherProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View>
        <TextInput
          style={[
            styles.input,
            props.error && { borderWidth: 1, borderColor: 'red' },
          ]}
          {...otherProps}
          autoComplete='additional-name'
          multiline
          numberOfLines={5}
          textContentType='name'
          placeholderTextColor='#ccc'
        />
        <Text style={styles.charCount}>{props.charCount}/200</Text>
      </View>
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default TextareaInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: darkColor,
    color: lightColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: goldColor,
    width: 350,
    height: 140,
    textAlignVertical: 'top',
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
  },
  charCount: {
    position: 'absolute',
    color: lightColor,
    fontSize: 16,
    bottom: 8,
    right: 14,
  },
});
