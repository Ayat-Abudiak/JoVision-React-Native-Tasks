
import React, { Component } from 'react';
import {Text,ScrollView,RefreshControl,StyleSheet} from 'react-native';

export default class Task37 extends Component {
  state = {
    refreshing: false,
    words: [],
  };

  componentDidMount() {
    this.generateWords();
  }

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

  generateWords() {
    let words = [];

    for (let i = 0; i < 100; i++) {
      words.push(this.generateRandomWord(8));
    }

    this.setState({ words: words });
  }

  refreshPage = () => {
    this.setState({ refreshing: true });

    this.generateWords();

    this.setState({ refreshing: false });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.refreshPage}
          />
        }
      >
        {this.state.words.map((word, index) => (
          <Text key={index} style={styles.text}>
            {word}
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
