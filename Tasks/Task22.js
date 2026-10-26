
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


function MyFunctionPage(props) {

  return (
    <View>
      <TextInput
        style={styles.input}
        value={props.text}
        onChangeText={props.update_text}
        placeholder="Enter text here"
      />
    </View>
  );
}


export default function Task22() {

  const [text, set_text] = useState('MyFunctionPage');

  function update_text(new_text) {
    set_text(new_text);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>{text}</Text>

      <MyFunctionPage
        text={text}
        update_text={update_text}
      />

    </View>
  );
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
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  }
});
