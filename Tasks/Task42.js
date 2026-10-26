
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {NavigationContainer,useNavigation,} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


function ScreenContent(props) {
  const navigation = useNavigation();

  const screens = [
    'Screen 1',
    'Screen 2',
    'Screen 3',
    'Screen 4',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.screenName}
      </Text>

      {screens.map((screen) => {
        if (screen !== props.screenName) {
          return (
            <View style={styles.button} key={screen}>
              <Button
                title={'Go to ' + screen}
                onPress={() => navigation.navigate(screen)}
              />
            </View>
          );
        }

        return null;
      })}
    </View>
  );
}


function ScreenOne() {
  return <ScreenContent screenName="Screen 1" />;
}


function ScreenTwo() {
  return <ScreenContent screenName="Screen 2" />;
}


function ScreenThree() {
  return <ScreenContent screenName="Screen 3" />;
}


function ScreenFour() {
  return <ScreenContent screenName="Screen 4" />;
}


export default function Task42() {
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
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    width: 220,
  },
});
