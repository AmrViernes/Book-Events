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
        size={22}
        color='#fff'
        style={{ position: 'absolute', left: 37, top: 13 }}
      />
    </View>
  );
}

export default SearchInput

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  input: {
    backgroundColor: darkColor,
    color: '#fff',
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 18,
    borderRadius: 12,
    borderColor: lightColor,
    width: 350,
    height: 50,
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