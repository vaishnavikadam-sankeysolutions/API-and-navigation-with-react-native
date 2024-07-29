import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = props => {
  const {name, age} = props.route.params;

  return (
    <View style={styles.main}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <Text style={{fontSize: 20}}>Name : {name}</Text>
      <Text style={{fontSize: 20}}>Age : {age} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
