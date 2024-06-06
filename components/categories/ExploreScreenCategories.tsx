import { StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import EventCategoryButton from './EventCategoryButton';
import { backgroundColor, goldColor } from '@/constants/Colors';
import { categories } from '@/constants/dummy';

const ExploreScreenCategories = () => {
  const [pressed, setPressed] = React.useState<string | null>(null);

  const handlePress = (name: string) => {
    setPressed(prev => (prev === name ? null : name));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map(category => (
        <EventCategoryButton
          key={category.name}
          name={category.name}
          url={
            pressed === category.name ? category.urlPressed : category.urlNormal
          }
          color={goldColor}
          pressed={pressed === category.name}
          onPress={() => handlePress(category.name)}
        />
      ))}
    </ScrollView>
  );
};

export default ExploreScreenCategories;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    width: '100%',
    backgroundColor: backgroundColor,
    marginTop: 20,
    height: 100,
  },
});
