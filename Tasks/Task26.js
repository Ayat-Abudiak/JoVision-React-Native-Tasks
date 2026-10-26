
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';


export default function Task26() {

  const [ip, set_ip] = useState('');
  const [loading, set_loading] = useState(false);

  async function get_ip() {
    try {
      const response = await fetch('https://api.ipify.org/');
      const data = await response.text();

      set_ip(data);
    }
    catch (error) {
      set_ip('Error getting IP');
    }
  }

  function get_ip_blocking() {
    set_loading(true);

    fetch('https://api.ipify.org/')
      .then(function(response) {
        return response.text();
      })
      .then(function(data) {
        set_ip(data);
      })
      .catch(function(error) {
        set_ip('Error getting IP');
      })
      .finally(function() {
        set_loading(false);
      });
  }


  return (
    <View style={styles.container}>

      <Text style={styles.headerText}>{ip}</Text>

      <Button
        title="Get IP"
        onPress={get_ip}
        disabled={loading}
      />

      <View style={styles.button}>
        <Button
          title="Get IP (Blocking)"
          onPress={get_ip_blocking}
          disabled={loading}
        />
      </View>

      {
        loading ? <ActivityIndicator size="large" color="blue" /> : null
      }

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
  button: {
    margin: 10
  }

});
