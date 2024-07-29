import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FetchData from './components/FetchData';

const App = () => {
  return (
    <View>
      <FetchData></FetchData>
    </View>
  );
};

export default App;
