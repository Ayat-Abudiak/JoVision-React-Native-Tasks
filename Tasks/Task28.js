import React, { Component } from 'react';
import {StyleSheet,View,FlatList,Image,Pressable,Alert} from 'react-native';

export default class Task28 extends Component {

  constructor() {
    super();
    this.state = {
      images: [
        require('../Resource/image1.jpg'),
        require('../Resource/image2.jpg'),
        require('../Resource/image3.jpg'),
        require('../Resource/image4.jpg'),
        require('../Resource/image5.jpg'),
        require('../Resource/image6.jpg'),
        require('../Resource/image7.jpg'),
        require('../Resource/image8.jpg'),
        require('../Resource/image9.jpg'),
        require('../Resource/image10.jpg')
      ]
    };
  }

  selectImage = (index) => {
    Alert.alert(
      'Image Selected',
      'You have selected image : ' + (index + 1)
    );
  };

  renderImage = ({ item, index }) => {
    return (
      <Pressable onPress={() => this.selectImage(index)}>
        <Image
          source={item}
          style={styles.image}
        />
      </Pressable>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.images}
          renderItem={this.renderImage}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={true}
          scrollEnabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    margin: 5
  }
});
