import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { darkColor, goldColor, lightColor } from '@/constants/Colors';

type Props = {
  title: string;
  errorText?: string;
  error?: boolean;
} & TextInput['props'];

const StringInput = (props: Props) => {
  const { ...otherProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View>
      <TextInput
        style={[styles.input, props.error && {borderWidth: 1, borderColor: 'red'}]}
        {...otherProps}
        autoComplete='additional-name'
        textContentType='name'
        placeholderTextColor='#ccc'
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
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: darkColor,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: goldColor,
    width: 350,
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
