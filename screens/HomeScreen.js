import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBar from '../components/SideBar';
import Advices from './Advices';
import Login from './Login';
import Register from './Register';


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

const MyDrawer =  createAppContainer(DrawerNavigation);
export default function HomeScreen(){
    return(
        <MyDrawer />
    );
}

