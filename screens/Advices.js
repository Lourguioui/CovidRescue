import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import FloattingActionButton from '../components/FloattingActionButton';
import { FontAwesome5 } from '@expo/vector-icons';


export default class Advices extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0, backgroundColor: '#0573A0' }}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', margin: 16, marginTop: 30 }} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>

                </View>
                <ScrollView style={styles.container}>

                    <View style={styles.logo}>
                        <Image source={require("../assets/Covid_logo.png")} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Conseils des spécialists
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.textContainer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.textContainer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.textContainer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>

                </ScrollView>
                <FloattingActionButton {...this.props}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scrollContainer: {
        flex: 1,
       
        flexDirection: 'column',
        height:undefined,
        alignItems:'center'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: "500"
    },
    logoContainer: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top:-35
    },
    title: {
        textAlign: 'center',
        color: '#0573A0',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily:'Roboto',
        

    },
    cardContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        shadowOffset: { width: 5, height: 5, },
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.7,
        paddingVertical: 30,
        paddingHorizontal:10,
        shadowRadius: 1,
        elevation: 10,
        marginBottom:20,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%'
    },
    textContainer: {
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        overflow: 'hidden',
    }

})

