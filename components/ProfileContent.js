import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';


export default class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.itemContainer}>
                    <Text style={styles.textItem}>{this.props.lastName} {this.props.firstName}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textItem}>Téléphone : 0780479252</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textItem}>Wilaya : {this.props.wilaya}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textItem}>Etat : {this.props.accountState}</Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },

    textItem: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25
    }
})