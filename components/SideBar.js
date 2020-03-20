import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { IonIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default function SideBar(props) {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradien}>
                <Image source={require('../assets/logo.png')} style={styles.sideLogo} />
            </LinearGradient>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props}/>

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
            flex:1,
           flexDirection:'column'
    },
    gradien: {
        height: 200,
        width: undefined,
        paddingTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    sideLogo: {
        width: 150,
        height: 150,
        justifyContent:'center',
        alignItems:'center'
    }
})

