import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EventCategoryButton from '@/components/categories/EventCategoryButton';
import { searchCategories } from '@/constants/dummy';
import { goldColor } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const CategoriesList = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      {searchCategories.map(category => (
        <EventCategoryButton
          key={category.name}
          url={category.urlNormal}
          name={category.name}
          color={goldColor}
          onPress={() => router.push(`/Search/Category/${category.name}`)}
        />
      ))}
    </View>
  );
}

export default CategoriesList

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    flexWrap: 'wrap',
  },
});