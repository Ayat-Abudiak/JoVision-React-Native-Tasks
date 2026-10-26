
import React, { Component } from 'react';
import {StyleSheet,View,FlatList,Image,Pressable,Alert,Button,Modal,Text,TextInput} from 'react-native';

export default class Task29 extends Component {

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
      ],
      modalVisible: false,
      imageIndex: ''
    };

    this.flatListRef = React.createRef();
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

  submitIndex = () => {
    const index = Number(this.state.imageIndex);

    if (
      this.state.imageIndex.trim() === '' ||
      !Number.isInteger(index) ||
      index < 1 ||
      index > this.state.images.length
    ) {
      Alert.alert(
        'Invalid Index',
        'Enter a number from 1 to 10.'
      );
      return;
    }

    this.setState({ modalVisible: false }, () => {
      this.flatListRef.current.scrollToIndex({
        index: index - 1,
        animated: true
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Button
          title="Select Image"
          onPress={() => this.setState({ modalVisible: true })}
        />

        <FlatList
          ref={this.flatListRef}
          data={this.state.images}
          renderItem={this.renderImage}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={true}
          scrollEnabled={true}
          getItemLayout={(data, index) => ({
            length: 160,
            offset: 160 * index,
            index: index
          })}
        />

        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => this.setState({ modalVisible: false })}
        >

          <View style={styles.modalContainer}>

            <Text style={styles.headerText}>
              Enter image number (1-10)
            </Text>

            <TextInput
              style={styles.input}
              value={this.state.imageIndex}
              onChangeText={(text) => this.setState({ imageIndex: text })}
              placeholder="Enter image number"
              keyboardType="numeric"
            />

            <Button
              title="Submit"
              onPress={this.submitIndex}
            />

            <Button
              title="Cancel"
              onPress={() => this.setState({ modalVisible: false })}
            />

          </View>

        </Modal>

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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10
  }
});
