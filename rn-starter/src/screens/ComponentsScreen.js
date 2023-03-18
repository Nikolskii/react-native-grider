import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Denis';

  return (
    <View>
      <Text style={styles.textTitle}>Getting started with React Native!</Text>
      <Text style={styles.textSubtitle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 45,
  },
  textSubtitle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
