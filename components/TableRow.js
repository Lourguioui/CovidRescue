import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';


export default class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wilaya: this.props.wiliaya,
            contaminated: this.props.contaminated,
            suspected: this.props.suspected,

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wilayaContainer}>
                    <Text style={styles.info}>{this.props.wilaya}</Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}>{this.props.contaminated}</Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}>{this.props.suspected}</Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}>{this.props.death}</Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}>{this.props.cured}</Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}>{this.props.healthy}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor :'#00000009',
        borderBottomWidth:1,
        // width:'95%',
        // left:'2.5%',
        // right:'2.5%',
    },
    wilayaContainer:{
        flex:2,
        alignItems:'center',
        height: 60,
        justifyContent:'center'
    },
    smallContainer:{
        flex:1,
        alignItems:'center',
        height: 60,
        justifyContent:'center'
    },
    info:{
        textAlign:'center',

    }
})