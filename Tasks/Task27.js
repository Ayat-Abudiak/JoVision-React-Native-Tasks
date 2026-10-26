
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, Alert } from 'react-native';


export default class Task27 extends Component {

  constructor() {
    super();
    this.state = {
      image: require('../Resource/image1.jpg')
    }
  }

  chooseImage = () => {
    Alert.alert(
      "Choose Image",
      "Enter the number of an image: 1, 2 or 3",
      [
        {
          text: "1",
          onPress: () => this.setState({
            image: require('../Resource/image1.jpg')
          })
        },
        {
          text: "2",
          onPress: () => this.setState({
            image: require('../Resource/image2.jpg')
          })
        },
        {
          text: "3",
          onPress: () => this.setState({
            image: require('../Resource/image3.jpg')
          })
        }
      ]
    );
  }


  render() {

    return (
      <View style={styles.container}>

        <Image
          source={this.state.image}
          style={styles.image}
        />

        <Button
          title="Choose Image"
          onPress={this.chooseImage}
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
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    margin: 10
  }

});
