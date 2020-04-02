import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import authUser from '../services/api';
import axios from 'axios';
import FloattingActionButton from '../components/FloattingActionButton';
import PhoneInput from "react-native-phone-input";
import CountryPicker from 'react-native-country-picker-modal';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onPressFlag = this.onPressFlag.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.state = {
            username: '',
            email: '',
            cca2: 'dz',
            countryModalOpen: false,
            error: null,
        }
    }
    componentDidMount() {
        this._loadingInitialState().done();
    }
    _loadingInitialState = async () => {
        var value = await AsyncStorage.getItem('account');
        var password = await AsyncStorage.getItem('pw');
        let account = JSON.parse(value)
        if (value !== null) {
            await axios.post(`https://covidrescue.app/covidrescue-main-backend/login?username=${account.email}&password=${password}`)
                .then(Response => {

                })
                .catch(error => {
                   
                    this.setState({ error })
                })
            if (this.state.error === null) {
                this.props.navigation.navigate("main")
            }
        }
    }
    selectCountry(country) {
        this.phone.selectCountry(country.cca2.toLowerCase());
        this.setState({ cca2: country.cca2 });
    }
    onPressFlag() {
        this.setState({ countryModalOpen: true });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>

                            <ScrollView style={styles.formContainer}>
                                <View style={styles.logoContainer}>
                                    <Image source={require('../assets/Covid_logo.png')} />

                                </View>
                                <TextInput
                                    placeholder='Adresse e-mail'
                                    style={styles.input}
                                    onChangeText={(email) => this.setState({ email })}
                                />


                                <TextInput
                                    placeholder="Mot de passe"
                                    style={styles.input}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                />



                            </ScrollView>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.login}>
                    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
                        <Text style={styles.buttonText}>S'identifier</Text>

                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textContainer} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.textStyle}>Vous n'avez pas un compte? Inscrivez vous!</Text>
                </TouchableOpacity>



            </View>
        );
    }
    login = () => {

        const password = this.state.password;
        const email = this.state.email;
       


        let URL = `https://covidrescue.app/covidrescue-main-backend/login?username=${email}&password=${password}`;




        axios.post(URL)
            .then(Response => {


                AsyncStorage.setItem('pw', password)
                AsyncStorage.setItem('account', Response.headers.account);
                console.log(Response.headers.account);
                this.props.navigation.navigate('main');



            })
            .catch(error => {

                alert(error);
            })

    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',

        paddingBottom: "20%",
        marginBottom: '0%',


    },
    container: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 0,


    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "20%",
        height: 100,
        flex: 1,
        paddingBottom: 0,
        top: '5%',



    },
    formContainer: {
        position: 'absolute',


        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        marginBottom: '7%',

    },
    input: {
        height: 50,
        marginBottom: 10,
        backgroundColor: 'white',
        borderColor: '#03AFF7',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: "10%"
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
        width: 320,
        marginLeft: 22,
        bottom: 20,
        borderRadius: 20,


    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 30,


    },
    gradienFAB: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,

    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 20,


    },

    textStyle: {

        color: '#008AC3',
        fontFamily: 'Roboto',
        fontSize: 15,


    },
    textContainer: {

        height: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }


})