import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
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
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [businesses, errorMessage, searchApi];
};
