import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Task35 extends Component {
  state = {
    name: '',
    age: '',
    country: '',
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');

      if (data !== null) {
        const user = JSON.parse(data);

        const savedTime = new Date(user.timestamp).getTime();
        const currentTime = new Date().getTime();

        if (currentTime - savedTime < 60000 && currentTime >= savedTime) {
          this.setState({
            name: user.name,
            age: user.age,
            country: user.country,
          });
        } else {
          await AsyncStorage.removeItem('userData');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Could not load data');
    }
  };

  submitData = async () => {
    const { name, age, country } = this.state;

    const user = {
      name: name,
      age: age,
      country: country,
      timestamp: new Date().toISOString(),
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      Alert.alert('Success', 'Data saved');
    } catch (error) {
      Alert.alert('Error', 'Could not save data');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={this.state.name}
          onChangeText={name => this.setState({ name: name })}
        />

        <Text>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          value={this.state.age}
          onChangeText={age => this.setState({ age: age })}
          keyboardType="numeric"
        />

        <Text>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your country"
          value={this.state.country}
          onChangeText={country => this.setState({ country: country })}
        />

        <Button title="Submit" onPress={this.submitData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    padding: 8,
  },
});
