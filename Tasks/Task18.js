
import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';


export default class Task18 extends Component {

  constructor() {
    super();
    this.state = {
      content: true
    }
  }

  componentDidMount() {
    setTimeout(this.finishLoading, 5000);
  }

  finishLoading = () => {this.setState({content: false});}


  render() {

    return (
      <View style={styles.container}>

       {
        this.state.content ?
        <View>
          <ActivityIndicator size="large" color="#538f6f"/>
          <Text>Loading...</Text>
        </View>
        : <Text style={styles.headerText}> Ayat </Text>
       }

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
