import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackScreen from '@/components/stacks/StackScreen';
import SearchInput from '@/components/inputs/SearchInput';
import CategoriesList from './components/CategoriesList';
import { backgroundColor, lightColor } from '@/constants/Colors';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.searchContainer}>
      <StackScreen title='Search' />
      <View style={styles.searchContainer}>
        <View style={{ width: '95%', alignSelf: 'center' }}>
          <SearchInput />
        </View>
        <View style={{ width: '95%', alignSelf: 'center' }}>
          <Text
            style={{
              color: lightColor,
              fontSize: 18,
              paddingLeft: 15,
              paddingBottom: 20,
            }}
          >
            Search by category
          </Text>
          <CategoriesList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    gap: 30,
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: backgroundColor,
  },
});
