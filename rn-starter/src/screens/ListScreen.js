import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const frineds = [
    { name: 'friend #1', age: 20 },
    { name: 'friend #2', age: 30 },
    { name: 'friend #3', age: 25 },
    { name: 'friend #4', age: 40 },
    { name: 'friend #5', age: 45 },
    { name: 'friend #6', age: 52 },
    { name: 'friend #7', age: 22 },
    { name: 'friend #8', age: 26 },
    { name: 'friend #9', age: 38 },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={frineds}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
