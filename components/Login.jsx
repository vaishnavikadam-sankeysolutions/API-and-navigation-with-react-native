import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Home';

const Login = props => {
  // const name = 'Vaish';
  const [name, setName] = useState('');
  const age = 22;
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 20}}> Login Screen</Text>
      <TextInput
        placeholder="Enter name"
        style={{fontSize: 20, borderColor: 'black', borderWidth: 2}}
        onChangeText={text => setName(text)}></TextInput>
      <Button
        title="GO to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}></Button>
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

export default Login;
