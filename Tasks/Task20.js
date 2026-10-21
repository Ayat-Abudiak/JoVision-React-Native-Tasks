
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class MyClassPage extends Component {

  componentDidMount() {
    console.log("MyClassPage loaded");
  }

  componentWillUnmount() {
    console.log("MyClassPage unloaded");
  }

  render() {

    return (
      <View>
        <Text style={styles.headerText}>MyClassPage</Text>
      </View>
    );
  }
}


export default class Task20 extends Component {

  constructor() {
    super();
    this.state = {
      content: false
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }


  render() {

    return (
      <View style={styles.container}>

       {
        this.state.content ? <MyClassPage /> : null
       }

      <Button title="Show" onPress={this.componentHideAndShow} />

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
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },

});