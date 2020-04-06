import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Fumi } from 'react-native-textinput-effects';
import { Button } from 'react-native-paper';
import { isEmailValid, isPasswordValid } from '../services/fields.utils';
import { getErrorMessage } from '../services/errors.utils.js'
import { BLUE_THEME_COLOR, ERROR_THEME_COLOR, BUTTON_BACKGROUND_COLOR } from '../constants/theme';
import { Snackbar } from 'react-native-paper';
import { pathOr } from 'rambda'

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
            loginLoading: false,
            errorLogin: null,
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

    _onDismissSnackBar = () => this.setState({ loginError: null });
    
    _login = () => {
      const { email, password } = this.state
      const emailValue = pathOr(this.state.email, ['route', 'params', 'email'], this.props)
      const newState = {}
      if (!isEmailValid(emailValue)) {
        newState.emailError = 'Adresse email non valide!'
      }
      if (!isPasswordValid(password)) {
        newState.passwordError = '6 caractères minimum'
      }
      if (newState.emailError || newState.passwordError) {
        this.setState({ ...newState })
        return
      }
      const URL = `https://covidrescue.app/covidrescue-main-backend/login?username=${emailValue}&password=${password}`;
      this.setState({ loginLoading: true })
      axios.post(URL)
          .then(Response => {
              AsyncStorage.setItem('pw', password)
              AsyncStorage.setItem('account', Response.headers.account);
              this.setState({ loginLoading: false, loginError: null })
              this.props.navigation.navigate('main');

          })
          .catch(error => {
            const errorMessage = getErrorMessage(error) || 'Une erreur s\'est produite, veuillez réessayer plus tard!'
            this.setState({ loginError: errorMessage, loginLoading: false })
          })
    }
    render() {
      const { emailError, passwordError } = this.state
      const emailLabel = emailError || 'Adresse e-mail'
      const passwordLabel = passwordError || 'Mot de passe'
      const emailValue = pathOr(this.state.email, ['route', 'params', 'email'], this.props)
      return (
          <View style={[styles.mainContainer, { paddingBottom: this.state.mainContainerPadding }]}>

              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                  <View style={styles.container}>

                      <ScrollView style={styles.formContainer}>
                          <View style={styles.logoContainer}>
                              <Image source={require('../assets/Covid_logo.png')} />

                          </View>
                          <Fumi
                            style={{
                              backgroundColor: emailError ? undefined : BUTTON_BACKGROUND_COLOR,
                              borderColor: ERROR_THEME_COLOR,
                              borderWidth: emailError ? 0.5 : 0,
                              marginTop: 10,
                            }}
                            labelStyle={emailError ? { color: ERROR_THEME_COLOR } : undefined}
                            label={emailLabel}
                            iconClass={FontAwesome5}
                            iconName={'envelope'}
                            iconColor={emailError ? ERROR_THEME_COLOR : BLUE_THEME_COLOR}
                            iconSize={20}
                            iconWidth={40}
                            inputPadding={16}
                            value={emailValue}
                            onChangeText={(email) => this.setState({ email, emailError: null, loginError: null })}
                          />

                          <Fumi
                            style={{
                              backgroundColor: passwordError ? undefined : BUTTON_BACKGROUND_COLOR,
                              borderColor: ERROR_THEME_COLOR,
                              borderWidth: passwordError ? 0.5 : 0,
                              marginTop: 10,
                            }}
                            labelStyle={passwordError ? { color: ERROR_THEME_COLOR } : undefined}
                            label={passwordLabel}
                            iconClass={FontAwesome5}
                            iconName={'lock'}
                            iconColor={passwordError ? ERROR_THEME_COLOR : BLUE_THEME_COLOR}
                            iconSize={20}
                            iconWidth={40}
                            inputPadding={16}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password, passwordError: null, loginError: null })}
                          />
                      </ScrollView>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this._login}
              >
                <Button
                  icon="login"
                  mode="contained"
                  color={BLUE_THEME_COLOR}
                  style={styles.buttonStyle}
                  loading={this.state.loginLoading}
                >
                S'identifier
              </Button>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}
              >
                <Button
                  icon="account-plus"
                  mode="outlined"
                  color={BLUE_THEME_COLOR}
                  style={styles.buttonStyle}
                >
                  S'inscrir
                </Button>
              </TouchableOpacity>
              <Snackbar
                visible={this.state.loginError}
                onDismiss={this._onDismissSnackBar}
                duration={3000}
                style={{
                  backgroundColor: BLUE_THEME_COLOR,
                  opacity: 0.9,
                }}
                action={{
                  label: 'Dismiss',
                  onPress: () => this._onDismissSnackBar,
                }}
              >
              {this.state.loginError}
            </Snackbar>

          </View>
      );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
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
        marginBottom: "10%",
        height: 100,
        flex: 1,
        paddingBottom: 0,
        top: '5%',
        marginBottom: '10%'
    },
    formContainer: {
      position: 'absolute',

      top:'10%',
      paddingBottom : 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 20,

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
      marginBottom: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: 320,
      marginLeft: 'auto',
      marginRight: 'auto',
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