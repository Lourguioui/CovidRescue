import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import { IonIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBar from '../components/SideBar';
import Advices from './Advices';
import QrCodeScanner from './QrCodeScanner';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';


import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';


const StackMainScreen = createStackNavigator()


function MainScreenStack() {
    return (
        < StackMainScreen.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown: false, }}>
            < StackMainScreen.Screen name='MainScreen' component={MainScreen} />
            < StackMainScreen.Screen name='QrScanner' component={QrCodeScanner} />
        </ StackMainScreen.Navigator>
    );
}


const DrawerNavigation = createDrawerNavigator(
    {
        Home: {
            screen: MainScreenStack,
            navigationOptions: {
                title: 'Aceuil',
                drawerIcon: ({ tinColor }) => <Feather name='home' size={25} color={tinColor} />

            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profil',
                drawerIcon: ({ tinColor }) => <Feather name='user' size={25} color={tinColor} />
            }
        },
        Advices: {
            screen: Advices,
            navigationOptions: {
                title: 'Conseils',
                drawerIcon: ({ tinColor }) => <Feather name='list' size={25} color={tinColor} />
            }
        },
        QrScanner: {
            screen: QrCodeScanner,
            navigationOptions: {
                title: 'Scanner le Code QR',
                drawerIcon: ({ tinColor }) => <FontAwesome name='qrcode' size={25} color={tinColor} />

            }
        },

        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Deconnexion',
                drawerIcon: ({ tinColor }) => <Feather name='log-out' size={25} color={tinColor} />
            }

        },
       


    },
    {
        contentComponent: props => <SideBar {...props} />
    }

);

const MyDrawer = createAppContainer(DrawerNavigation);
export default function HomeScreen() {
    return (

        <MyDrawer />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: undefined,
        alignItems: 'center',
    }
})