import { View, StyleSheet, Text, FlatList } from 'react-native';
import BusinessDetail from './BusinessDetail';

const BusinessesList = ({ title, businesses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => {
          return <BusinessDetail business={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default BusinessesList;
