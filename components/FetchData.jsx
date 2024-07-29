import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FetchData = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);

  const getAPIData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'; // Replace YOUR_IP_ADDRESS with your actual IP address
      let result = await fetch(url);
      result = await result.json();
      setData(result);
    } catch (error) {
      setError(error);
      console.warn(error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>API Call</Text>
      {data ? (
        data.map(post => (
          <View key={post.id}>
            <Text>Title: {post.title}</Text>
            <Text>Details: {post.body}</Text>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text style={styles.error}>Error: {error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
});

export default FetchData;
