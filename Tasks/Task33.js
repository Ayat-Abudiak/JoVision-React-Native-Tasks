
import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,Pressable} from 'react-native';

import Video from 'react-native-video';

export default class Task33 extends Component {

  videoRef = React.createRef();

  state = {
    videoStarted: false,
    paused: true
  };

  playPauseVideo = () => {
    this.setState({
      videoStarted: true,
      paused: !this.state.paused
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>
          Task 33
        </Text>

        <View style={styles.videoContainer}>

          <Video
            ref={this.videoRef}
            source={require('../Resource/video.mp4')}
            style={styles.video}
            controls={false}
            resizeMode="contain"
            paused={this.state.paused}
          />

          <Pressable
            style={styles.videoTouch}
            onPress={this.playPauseVideo}
          >

            {!this.state.videoStarted && (
              <Image
                source={require('../Resource/poster.jpg')}
                style={styles.poster}
                resizeMode="cover"
              />
            )}

            {!this.state.videoStarted || this.state.paused ? (
              <Text style={styles.playButton}>
                {this.state.paused ? '▶' : ''}
              </Text>
            ) : null}

          </Pressable>

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

  videoTouch: {
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
