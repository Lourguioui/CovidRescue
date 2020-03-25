import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IonIcons } from "@expo/vector-icons";
import Advices from './screens/Advices';
import { Font } from 'expo';
import Register from './screens/Register';
import Login from './screens/Login';

import { FontAwesome5 } from '@expo/vector-icons';
import SideBar from './components/SideBar';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StackNavigator = createStackNavigator();
useEffect(() => {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
}, []);

export default function App(){

  return(
    
  <NavigationContainer>
    <StackNavigator.Navigator initialRouteName = "Login" screenOptions={{headerShown:false, }}>
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="main" component={HomeScreen} />
      <StackNavigator.Screen name="Register" component={Register} />
      
         
    </StackNavigator.Navigator>
  </NavigationContainer>
  );

}

