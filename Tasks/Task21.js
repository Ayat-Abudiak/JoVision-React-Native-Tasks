
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


function MyFunctionPage() {

  useEffect(() => {
    console.log("MyFunctionPage loaded");

    return function() {
      console.log("MyFunctionPage unloaded");
    };
  }, []);

  return (
    <View>
      <Text style={styles.headerText}>MyFunctionPage</Text>
    </View>
  );
}


export default function Task21() {

  const [content, set_content] = useState(false);

  function componentHideAndShow() {
    set_content(!content);
  }

  return (
    <View style={styles.container}>

      {
        content ? <MyFunctionPage /> : null
      }

      <Button title="Show" onPress={componentHideAndShow} />

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
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },

});
