import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [businesses, errorMessage, searchApi] = useBusinesses();

  const filterBusinessesByPrice = price => {
    return businesses.filter(business => business.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} businesses</Text>
      <BusinessesList
        title="Cost Effective"
        businesses={filterBusinessesByPrice('$')}
      />
      <BusinessesList
        title="Big Pricier"
        businesses={filterBusinessesByPrice('$$')}
      />
      <BusinessesList
        title="Big Spender"
        businesses={filterBusinessesByPrice('$$$')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
