import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
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

const StackAdvices = createStackNavigator();

function AdvicesStack(){
    return(
        <StackAdvices.Navigator initialRouteName = "Advices" screenOptions={{headerShown:false, }}>
            <StackAdvices.Screen name="Advices" component={Advices} />
            <StackAdvices.Screen name='QrCodeScanner' component={QrCodeScanner} />
        </StackAdvices.Navigator>
    );
}


const DrawerNavigation = createDrawerNavigator(
    {
        Home: {
            screen: MainScreen,
            navigationOptions: {
                title: 'Aceuil',
                drawerIcon: ({ tinColor }) => <Feather name='home' size={20} color={tinColor} />

            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profil',
                drawerIcon: ({ tinColor }) => <Feather name='user' size={20} color={tinColor} />
            }
        },
        Advices: {
            screen: AdvicesStack,
            navigationOptions: {
                title: 'Conseils',
                drawerIcon: ({ tinColor }) => <Feather name='home' size={20} color={tinColor} />
            }
        },
       
        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Deconnexion',
                drawerIcon: ({ tinColor }) => <Feather name='log-out' size={20} color={tinColor} />
            }

        },
        QrScanner: {
            screen: QrCodeScanner,
            navigationOptions: {
                title: 'Scanner le Code QR',
                drawerIcon: ({ tinColor }) => <Feather name='scan' size={20} color={tinColor} />

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