
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return currentTime;
}

export default function Task34() {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      <Text>Date: {currentTime.toLocaleDateString()}</Text>

      <Text>Time: {currentTime.toLocaleTimeString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
