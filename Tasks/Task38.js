
import React, { Component, createContext } from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

const TextContext = createContext();

class ComponentOne extends Component {
  render() {
    return (
      <Text style={styles.text}>
        {this.context.text}
      </Text>
    );
  }
}

ComponentOne.contextType = TextContext;

function ComponentTwo() {
  const context = React.useContext(TextContext);

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={context.text}
        onChangeText={context.updateText}
      />

      <ComponentOne />
    </View>
  );
}


export default class Task38 extends Component {
  state = {
    text: '',
  };

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <TextContext.Provider
        value={{
          text: this.state.text,
          updateText: this.updateText,
        }}
      >
        <View style={styles.container}>
          <ComponentTwo />
          <ComponentTwo />
          <ComponentTwo />
          <ComponentTwo />
        </View>
      </TextContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  box: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    padding: 5,
    color: 'blue',
  },
});
