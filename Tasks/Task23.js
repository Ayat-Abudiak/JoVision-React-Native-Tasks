
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


class MyClassPage extends Component {

  render() {

    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.props.text}
          onChangeText={this.props.update_text}
          placeholder="Enter text here"
        />
      </View>
    );
  }
}


export default class Task23 extends Component {

  constructor() {
    super();
    this.state = {
      text: 'MyClassPage'
    }
  }

  update_text = (new_text) => {
    this.setState({
      text: new_text
    });
  }


  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>{this.state.text}</Text>

        <MyClassPage
          text={this.state.text}
          update_text={this.update_text}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  }
});
