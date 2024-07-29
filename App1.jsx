/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'User Screen'}}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

const UserData = props => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: {props.name}</Text>
      <Text style={{fontSize: 20}}>Age: 22</Text>
      <Text style={{fontSize: 20}}>Email: vaish@test.com</Text>
    </View>
  );
};

export default App;
