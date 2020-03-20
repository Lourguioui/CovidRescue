import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register';
import Login from './screens/Login';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {ProfileScreen, MessagesScreen, ActivityScreen} from './screens/HomeScreen';

const DrawerNavigation = createDrawerNavigator({
  Register,
  Login,
  
});

export default createAppContainer(DrawerNavigation);

// export default function App() {
//   return (
//    <Login />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center', 
//   },
// });
