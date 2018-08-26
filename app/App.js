import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white}>Hello everyone!</Text>
        <Text style={styles.white}>I'm Mr.Kevin.</Text>
        <Text style={styles.white}>This is my first application.</Text>
        <Text style={styles.white}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2496ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#fff',
  },
});
