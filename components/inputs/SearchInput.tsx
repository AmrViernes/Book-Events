import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { darkColor, lightGrayColor, mediumGrayColor } from '@/constants/Colors';

const SearchInput = ({ onPress }: { onPress?: () => void }) => {
  const [searchText, setSearchText] = useState('');

  const clearText = () => {
    setSearchText('');
  };

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
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onPress={onPress}
      />
      {searchText.length > 0 && (        
      <TouchableOpacity onPress={clearText} style={styles.clearButton}>
        <AntDesign name='close' size={20} color='#fff' />
      </TouchableOpacity>
      )}
      <AntDesign
        name='search1'
        size={20}
        color='#fff'
        style={{ position: 'absolute', left: 14, top: 14 }}
      />
    </View>
  );
};

export default SearchInput;

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
    paddingHorizontal: 50,
    fontSize: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: mediumGrayColor,
    flex: 1,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
});
