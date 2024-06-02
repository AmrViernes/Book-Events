import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { darkColor, goldColor, lightColor } from '@/constants/Colors';

interface TabsProps {
  selected: string;
  onSelect: (tab: string) => void;
}
const HistoryTabs = ({ selected, onSelect }: TabsProps) => {
  return (
    <View style={styles.tabsContainer}>
      <Pressable
        style={[
          styles.titleContainer,
          {
            backgroundColor: selected === 'Pending' ? goldColor : darkColor,
          },
        ]}
        onPress={() => onSelect('Pending')}
      >
        <Text
          style={[
            styles.tabTitle,
            { color: selected === 'Pending' ? darkColor : lightColor },
          ]}
        >
          Pending
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.titleContainer,
          {
            backgroundColor: selected === 'Completed' ? goldColor : darkColor,
          },
        ]}
        onPress={() => onSelect('Completed')}
      >
        <Text
          style={[
            styles.tabTitle,
            { color: selected === 'Completed' ? darkColor : lightColor },
          ]}
        >
          Completed
        </Text>
      </Pressable>
    </View>
  );
}

export default HistoryTabs

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: darkColor,
    borderRadius: 15,
    height: 53,
    marginVertical: 20,
    width: '90%',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '50%',
    backgroundColor: goldColor,
    borderRadius: 15,
  },
  tabTitle: {
    fontSize: 18,
    color: darkColor,
  },
});