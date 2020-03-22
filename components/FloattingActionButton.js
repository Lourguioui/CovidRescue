import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default class FloattingActionButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('QRscanner')}
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    position: 'absolute',
                    bottom: 10,
                    right: '3%',

                    height: 60,

                    borderRadius: 100,
                }}
            >
                <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
                    <Image source={require("../assets/Qr.png")} />
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 100,
    }
})