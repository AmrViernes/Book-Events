import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { darkColor, lightColor } from '../constants/Colors';

type Props = TextInput['props'];
const Input = (props: Props) => {
  const { ...otherProps } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...otherProps}
        autoComplete='additional-name'
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  input: {
    backgroundColor: darkColor,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: lightColor,
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
});
