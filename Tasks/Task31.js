
import React, { Component } from 'react';
import {View,Text,Image,FlatList,Pressable,Button,Alert,Modal,TextInput,StyleSheet} from 'react-native';

export default class Task31 extends Component {
  state = {
    images: [
      { id: '1', source: require('../Resource/image1.jpg') },
      { id: '2', source: require('../Resource/image2.jpg') },
      { id: '3', source: require('../Resource/image3.jpg') },
      { id: '4', source: require('../Resource/image4.jpg') },
      { id: '5', source: require('../Resource/image5.jpg') },
      { id: '6', source: require('../Resource/image6.jpg') },
      { id: '7', source: require('../Resource/image7.jpg') },
      { id: '8', source: require('../Resource/image8.jpg') },
      { id: '9', source: require('../Resource/image9.jpg') },
      { id: '10', source: require('../Resource/image10.jpg') }
    ],
    showModal: false,
    imageNumber: '',
    nextId: 11
  };

  selectImage = (index) => {
    Alert.alert('Selected Image', 'Image number: ' + (index + 1));
  };

  removeImage = (id) => {
    Alert.alert('Remove Image', 'Do you want to remove this image?', [
      { text: 'Cancel' },
      {
        text: 'Remove',
        onPress: () => {
          this.setState({
            images: this.state.images.filter(item => item.id !== id)
          });
        }
      }
    ]);
  };

  addImage = (index) => {
    let images = [...this.state.images];
    let image = images[index];

    images.splice(index + 1, 0, {
      id: String(this.state.nextId),
      source: image.source
    });

    this.setState({
      images: images,
      nextId: this.state.nextId + 1
    });
  };

  goToImage = () => {
    let number = Number(this.state.imageNumber);

    if (
      this.state.imageNumber.trim() === '' ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > this.state.images.length
    ) {
      Alert.alert('Invalid Number', 'Enter a number from 1 to ' + this.state.images.length);
      return;
    }

    this.setState({ showModal: false }, () => {
      this.list.scrollToIndex({
        index: number - 1,
        animated: true
      });
    });
  };

  renderImage = ({ item, index }) => (
    <View style={styles.imageBox}>
      <Pressable onPress={() => this.selectImage(index)}>
        <Image source={item.source} style={styles.image} />
      </Pressable>

      <Pressable style={styles.addButton} onPress={() => this.addImage(index)}>
        <Text>+</Text>
      </Pressable>

      <Pressable style={styles.removeButton} onPress={() => this.removeImage(item.id)}>
        <Text>X</Text>
      </Pressable>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Select Image"
          onPress={() => this.setState({ showModal: true })}
        />

        <FlatList
          ref={(list) => (this.list = list)}
          data={this.state.images}
          renderItem={this.renderImage}
          keyExtractor={(item) => item.id}
          horizontal
          getItemLayout={(data, index) => ({
            length: 160,
            offset: 160 * index,
            index
          })}
        />

        <Modal
          visible={this.state.showModal}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <View style={styles.modal}>
            <Text>Enter image number (1-{this.state.images.length})</Text>

            <TextInput
              style={styles.input}
              value={this.state.imageNumber}
              onChangeText={(text) => this.setState({ imageNumber: text })}
              placeholder="Image number"
              keyboardType="numeric"
            />

            <Button title="Submit" onPress={this.goToImage} />

            <Button
              title="Cancel"
              onPress={() => this.setState({ showModal: false })}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBox: {
    margin: 5,
    position: 'relative'
  },
  image: {
    width: 150,
    height: 150
  },
  addButton: {
    position: 'absolute',
    top: 5,
    left: 5
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    margin: 10
  }
});
