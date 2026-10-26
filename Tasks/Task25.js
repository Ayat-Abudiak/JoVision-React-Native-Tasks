
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


class MyClassPage extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  update_text = (new_text) => {
    this.setState({
      text: new_text
    });
  }

  render() {

    return (
      <View>
        <Text style={styles.headerText}>{this.state.text}</Text>
      </View>
    );
  }
}


export default class Task25 extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }

    this.child_ref = React.createRef();
  }

  update_text = (new_text) => {
    this.setState({
      text: new_text
    });

    this.child_ref.current.update_text(new_text);
  }


  render() {

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={this.update_text}
          placeholder="Enter text here"
        />

        <MyClassPage ref={this.child_ref} />

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
