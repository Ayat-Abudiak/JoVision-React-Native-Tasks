import React, { Component } from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';


const textSlice = createSlice({
  name: 'text',
  initialState: {
    value: '',
  },
  reducers: {
    updateText: (state, action) => {
      state.value = action.payload;
    },
  },
});


const { updateText } = textSlice.actions;

const store = configureStore({
  reducer: {
    text: textSlice.reducer,
  },
});


function ComponentOne() {
  const text = useSelector((state) => state.text.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={(newText) => {
          dispatch(updateText(newText));
        }}
      />

      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}


class Task39Screen extends Component {
  state = {
    showComponent: true,
  };

  toggleComponent = () => {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.showComponent ? 'Hide Component' : 'Show Component'}
          onPress={this.toggleComponent}
        />

        {this.state.showComponent && <ComponentOne />}
      </View>
    );
  }
}


export default class Task39 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Task39Screen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});