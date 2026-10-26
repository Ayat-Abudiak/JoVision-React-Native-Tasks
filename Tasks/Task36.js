
import React, { Component } from 'react';
import {View,Text,ScrollView,StyleSheet,} from 'react-native';

export default class Task36 extends Component {

  generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {Array.from({ length: 100 }, (_, index) => (
          <Text key={index} style={styles.text}>
            {this.generateRandomWord(8)}
          </Text>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    fontSize: 18,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eeeeee',
  },
});
