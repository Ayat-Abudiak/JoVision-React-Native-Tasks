import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


export default class App extends Component {

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
        this.state.content ? <Text style= {styles.headerText}> Ayat </Text> : null
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