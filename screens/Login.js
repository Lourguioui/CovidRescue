import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.mainContainer}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>

                        <ScrollView style={styles.formContainer}>
                            <View style={styles.logoContainer}>
                                <Image source={require('../assets/Covid_logo.png')} />

                            </View>
                            <TextInput placeholder="Nom" style={styles.input} />
                            <TextInput placeholder="Prénom" style={styles.input} />
                            <TextInput placeholder="Téléphone" style={styles.input} keyboardType={'numeric'} />
                           
                            
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.buttonStyle}>
                <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
                    <Text style={styles.buttonText}>S'identifier</Text>

                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer}>
                    <Text style={styles.textStyle}>Vous n'avez pas un compte? Inscrivez vous!</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 0,
        marginBottom:'20%',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 0,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        height: 150,
        flex: 1,
        paddingBottom: 0,
        top:20,


    },
    formContainer: {
        position: 'absolute',


        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        marginBottom: 20,

    },
    input: {
        height: 50,
        marginBottom: 10,
        backgroundColor: 'white',
        borderColor: '#03AFF7',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 25
    },
    dropDown: {
        borderColor: '#03AFF7',
        marginBottom: 10,
    },
    buttonStyle: {
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.0)',
        alignItems: 'center',
        justifyContent: 'center',
        width:320,
        marginLeft:22,
        bottom:20,
        borderRadius:20,
        
      
    },
    gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius:20,
       

    },
    buttonText:{
        color: '#fff',
        fontFamily:'Roboto',
        fontSize:20,

       
    },

    textStyle:{
        
        color:'#008AC3',
        fontFamily:'Roboto',
        fontSize:15,
       
       
    },
    textContainer:{
        
        height:10,
        justifyContent:'center',
        alignItems: 'center',
        
    }
   

})