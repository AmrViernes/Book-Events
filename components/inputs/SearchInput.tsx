import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { darkColor, lightColor, lightGrayColor } from '@/constants/Colors';

interface Props {
    onPress?: () => void
}
const SearchInput = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        autoComplete='additional-name'
        autoCapitalize='words'
        clearButtonMode='while-editing'
        placeholder='Search all events...'
        placeholderTextColor={lightGrayColor}
        inputMode='search'
        onPress={props.onPress}
      />
      <AntDesign
        name='search1'
        size={20}
        color='#fff'
        style={{ position: 'absolute', left: '8%', top: 14 }}
      />
    </View>
  );
}

export default SearchInput

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  input: {
    backgroundColor: darkColor,
    color: '#fff',
    position: 'relative',
    paddingHorizontal: 50,
    fontSize: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: lightColor,
    width: 350,
    height: 50,
  },
});