import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import EventCategoryButton from '@/components/categories/EventCategoryButton';
import { categories } from '@/constants/dummy';
import { goldColor } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { FlashList } from '@shopify/flash-list';

const CategoriesList = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlashList
        data={categories}
        estimatedItemSize={12}
        numColumns={4}
        renderItem={({ item }) => (
          <EventCategoryButton
            itemMarginBottom={15}
            key={item.name}
            url={item.urlNormal}
            name={item.name}
            color={goldColor}
            onPress={() => router.push(`/Search/Category/${item.name}`)}
          />
        )}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
