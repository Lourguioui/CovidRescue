import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register';
import Login from './screens/Login';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {ProfileScreen, MessagesScreen, ActivityScreen} from './screens/HomeScreen';
import SideBar from './components/SideBar';

const DrawerNavigation = createDrawerNavigator({
  Register : {
    screen: Register,
    navigationOptions : {
      drawerIcon : ({tinColor}) => <Feather name='home' size={20} color={tinColor} />
    }
  },
  Login,
  
},
{
  contentComponent: props => <SideBar {...props} />
}
);

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
