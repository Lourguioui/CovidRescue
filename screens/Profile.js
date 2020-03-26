import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import QrCode from '../components/QrCode';



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telephone: '',
            state: ''
        }
    }

        render() {
            return (
                <View style={Styles.container}>
                    <QrCode />
                </View>
            );
        }
   
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'

    }
})