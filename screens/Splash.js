import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>jhello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:'green',
        flex:1,
        alighItems : 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color:'red'
    }
})