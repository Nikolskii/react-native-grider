import { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = searchTerm => {
  const [term, setTerm] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const responce = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setBusinesses(responce.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} businesses</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
