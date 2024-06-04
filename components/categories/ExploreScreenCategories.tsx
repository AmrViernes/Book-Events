import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import EventCategoryButton from './EventCategoryButton';
import { goldColor } from '@/constants/Colors';
import { homeCategories } from '@/constants/dummy';

const ExploreScreenCategories = () => {
  const [pressed, setPressed] = React.useState<string | null>(null);

  const handlePress = (name: string) => {
    setPressed(prev => (prev === name ? null : name));
  };

  return (
    <View style={styles.container}>
      {homeCategories.map(category => (
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
