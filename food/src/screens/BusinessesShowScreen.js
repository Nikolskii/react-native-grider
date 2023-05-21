import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const BusinessesShowScreen = ({ navigation }) => {
  const [business, setBusiness] = useState(null);
  const id = navigation.getParam('id');

  const getBusiness = async id => {
    const responce = await yelp.get(`/${id}`);
    setBusiness(responce.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (!business) {
    return null;
  }

  return (
    <View>
      <Text>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default BusinessesShowScreen;
