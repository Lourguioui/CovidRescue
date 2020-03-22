import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register';
import Login from './screens/Login';
import QrCodeScanner from './screens/QrCodeScanner';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IonIcons } from "@expo/vector-icons";
import Advices from './screens/Advices';
import { FontAwesome5 } from '@expo/vector-icons';
import SideBar from './components/SideBar';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StackNavigator = createStackNavigator();

export default function App(){
  return(
    <QrCodeScanner />
  // <NavigationContainer>
  //   <StackNavigator.Navigator initialRouteName = "Home" screenOptions={{headerShown:false, }}>
  //     <StackNavigator.Screen name="Home" component={Login} />
  //     <StackNavigator.Screen name="Register" component={Register} />
  //     <StackNavigator.Screen name="main" component={HomeScreen} />
  //     <StackNavigator.Screen name="QRscanner" component={QrCodeScanner} />

      

  //   </StackNavigator.Navigator>
  // </NavigationContainer>
  );

}

