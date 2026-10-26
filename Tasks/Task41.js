
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1</Text>
    </View>
  );
}


function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>2</Text>
    </View>
  );
}


function ScreenThree() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>3</Text>
    </View>
  );
}


function ScreenFour() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>4</Text>
    </View>
  );
}


export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Screen 1"
          component={ScreenOne}
        />

        <Tab.Screen
          name="Screen 2"
          component={ScreenTwo}
        />

        <Tab.Screen
          name="Screen 3"
          component={ScreenThree}
        />

        <Tab.Screen
          name="Screen 4"
          component={ScreenFour}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
