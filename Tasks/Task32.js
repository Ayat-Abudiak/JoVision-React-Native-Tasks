
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable
} from 'react-native';

import Video from 'react-native-video';

export default class Task32 extends Component {

  state = {
    videoStarted: false
  };

  startVideo = () => {
    this.setState({
      videoStarted: true
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>
          Task 32
        </Text>

        <View style={styles.videoContainer}>

          <Video
            source={require('../Resource/video.mp4')}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            paused={!this.state.videoStarted}
          />

          {!this.state.videoStarted && (
            <Pressable
              style={styles.posterContainer}
              onPress={this.startVideo}
            >
              <Image
                source={require('../Resource/poster.jpg')}
                style={styles.poster}
                resizeMode="cover"
              />

              <Text style={styles.playButton}>
                ▶
              </Text>

            </Pressable>
          )}

        </View>

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

  videoContainer: {
    width: 350,
    height: 250
  },

  video: {
    width: '100%',
    height: '100%'
  },

  posterContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  poster: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  playButton: {
    fontSize: 50,
    color: 'white'
  }

});
