import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { darkColor, goldColor, lightColor, mediumGrayColor } from '@/constants/Colors';

type Props = {
  title: string;
  errorText?: string;
  error?: boolean;
  charCount?: number;
} & TextInput['props'];

const TextareaInput = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const { ...otherProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View>
        <TextInput
          style={[
            styles.input,
            props.error && { borderWidth: 1, borderColor: 'red' },
            isFocused ? { borderColor: goldColor } : { borderColor: mediumGrayColor },
          ]}
          {...otherProps}
          autoComplete='additional-name'
          multiline
          numberOfLines={5}
          textContentType='name'
          placeholderTextColor='#ccc'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    backgroundColor: darkColor,
    color: lightColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    height: 140,
    textAlignVertical: 'top',

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
