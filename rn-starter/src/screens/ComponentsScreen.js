import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
