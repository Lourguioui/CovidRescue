import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register';
import Login from './screens/Login';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IonIcons } from "@expo/vector-icons";
import Advices from './screens/Advices';
import { FontAwesome5 } from '@expo/vector-icons';
import SideBar from './components/SideBar';

// export default function App(){

//     return(
//      <HomeScreen />
//     );

// }

const DrawerNavigation = createDrawerNavigator(
  {
    Advices: {
      screen: Advices,
      navigationOptions: {
        title : 'Conseils',
        drawerIcon: ({ tinColor }) => <Feather name='home' size={20} color={tinColor} />
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title:'Profile',
        drawerIcon: ({ tinColor }) => <Feather name='user' size={20} color={tinColor} />
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title:'Deconnexion',
        drawerIcon: ({ tinColor }) => <Feather name='log-out' size={20} color={tinColor} />
      }

    }
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
