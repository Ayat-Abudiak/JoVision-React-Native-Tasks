
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


const MyFunctionPage = forwardRef((props, ref) => {

  const [text, set_text] = useState('MyFunctionPage');

  useImperativeHandle(ref, () => ({
    update_text(new_text) {
      set_text(new_text);
    }
  }));

  return (
    <View>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
});


export default function Task24() {

  const [text, set_text] = useState('');
  const child_ref = useRef(null);

  function update_text(new_text) {
    set_text(new_text);
    child_ref.current.update_text(new_text);
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={update_text}
        placeholder="Enter text here"
      />

      <MyFunctionPage ref={child_ref} />

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
