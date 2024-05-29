import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import EventCategoryButton from './EventCategoryButton';
import { goldColor } from '@/constants/Colors';

const ExploreScreenCategories = () => {
  const [pressed, setPressed] = React.useState<string | null>(null);

  const handlePress = (name: string) => {
    setPressed(prev => (prev === name ? null : name));
  };

  const categories = [
    {
      name: 'All',
      urlNormal: require('@/assets/images/icons/All-normal.svg'),
      urlPressed: require('@/assets/images/icons/All-pressed.svg'),
    },
    {
      name: 'Restaurant',
      urlNormal: require('@/assets/images/icons/restaurant-normal.svg'),
      urlPressed: require('@/assets/images/icons/restaurant-pressed.svg'),
    },
    {
      name: 'Fashion',
      urlNormal: require('@/assets/images/icons/fashion-normal.svg'),
      urlPressed: require('@/assets/images/icons/fashion-pressed.svg'),
    },
    {
      name: 'Sport',
      urlNormal: require('@/assets/images/icons/sport-normal.svg'),
      urlPressed: require('@/assets/images/icons/sport-pressed.svg'),
    },
  ];

  return (
    <View style={styles.container}>
      {categories.map(category => (
        <EventCategoryButton
          key={category.name}
          name={category.name}
          url={pressed === category.name ? category.urlPressed : category.urlNormal}
          color={goldColor}
          pressed={pressed === category.name}
          onPress={() => handlePress(category.name)}
        />
      ))}
    </View>
  );
};

export default ExploreScreenCategories;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
});
