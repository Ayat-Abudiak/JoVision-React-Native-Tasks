import React, { Component } from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import { Provider, legacy_connect as connect } from 'react-redux';
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


class ComponentOne extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          value={this.props.text}
          onChangeText={this.props.updateText}
        />

        <Text style={styles.text}>
           {this.props.text}
        </Text>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    text: state.text.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (newText) => dispatch(updateText(newText)),
  };
};

const ConnectedComponentOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentOne);


class Task40Screen extends Component {
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
          title={
            this.state.showComponent
              ? 'Hide Component'
              : 'Show Component'
          }
          onPress={this.toggleComponent}
        />

        {this.state.showComponent && <ConnectedComponentOne />}
      </View>
    );
  }
}


export default class Task40 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Task40Screen />
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