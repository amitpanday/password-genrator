/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/screen/Home';
import ConnectDb from './src/lib/ConnectDb'

const App = () => {
  const connection = ConnectDb.connect();
  console.log(connection)
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#a1a5ff' }
});

export default App;
