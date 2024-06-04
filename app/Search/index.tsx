import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackScreen from '@/components/stacks/StackScreen';
import SearchInput from '@/components/inputs/SearchInput';
import CategoriesList from './components/CategoriesList';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <StackScreen title='Search' />
      <SearchInput />
      <CategoriesList />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
