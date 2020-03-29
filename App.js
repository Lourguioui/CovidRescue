import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IonIcons } from "@expo/vector-icons";
import Advices from './screens/Advices';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Root } from 'native-base';
import Register from './screens/Register';
import Login from './screens/Login';

import { FontAwesome5 } from '@expo/vector-icons';
import SideBar from './components/SideBar';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StackNavigator = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <NavigationContainer>
      <StackNavigator.Navigator initialRouteName = "Login" screenOptions={{headerShown:false, }}>
        <StackNavigator.Screen name="Login" component={Login} />
        <StackNavigator.Screen name="main" component={HomeScreen} />
        <StackNavigator.Screen name="Register" component={Register} />
        
           
      </StackNavigator.Navigator>
    </NavigationContainer>
    );
  }
}

