import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackScreen from '@/components/stacks/StackScreen';
import SearchInput from '@/components/inputs/SearchInput';
import CategoriesList from './components/CategoriesList';
import { lightColor } from '@/constants/Colors';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <StackScreen title='Search' />
      <View style={styles.searchContainer}>
        <SearchInput />
        <View>
          <Text style={{ color: lightColor, fontSize: 18, paddingLeft: 15, paddingBottom: 10 }}>
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
    flexDirection: 'column',
    gap: 30,
  },
});
