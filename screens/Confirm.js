import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Fumi } from 'react-native-textinput-effects';
import { Button } from 'react-native-paper';
import { BLUE_THEME_COLOR, ERROR_THEME_COLOR, BUTTON_BACKGROUND_COLOR, SUCCESS_THEME_COLOR } from '../constants/theme';
import { Snackbar } from 'react-native-paper';

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      token: '',
    }
  }
  
  componentDidMount() {
    if (this.tokenInput) {
      this.tokenInput.focus()
    }
  }

    _handleTokenChange = (token) => {
      this.setState({ token, confirmError: null })
      if (this.state.token.length < token.length && token.length === 4) {
        this._submitConfirmation(token)
      }
    }
    
    _submitConfirmation(passedToken) {
      const { email } = this.props.route.params
      const { token: stateToken } = this.state
      const token = passedToken || stateToken
      if (!(typeof token === 'string') || token.length < 4) {
        this.setState({ confirmError: 'Le code doit avoir 4 caractères'})
        return
      }
      this.setState({ confirmLoading: true })
      setTimeout(() => {
        const request = axios.delete(`https://covidrescue.app/covidrescue-main-backend/pendingAccountRegistration?email=${email}&token=${token}`)
        request
          .then(Response => {
            this.setState({ confirmLoading: false, confirmSuccess: true })
            setTimeout(() => {
              this.props.navigation.navigate('Login', { email })
            }, 1000)
          })
          .catch(error => {
            this.setState({ confirmLoading: false, confirmError : "Mauvais code pour cette address e-mail!" })
          })
      }, 800)
      
    }

    render() {
      const { email } = this.props.route.params
      const { confirmError, confirmSuccess } = this.state
      const tokenLabel = confirmError ? confirmError : 'Entrer le code reçu par email'
      const buttonLabel = confirmSuccess ? "Adresse e-mail confirmée" : "Confirmer"
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
                              backgroundColor: BUTTON_BACKGROUND_COLOR,
                              marginTop: 10,
                            }}
                            disabled
                            label="Un e-mail vous a été envoyé à l'adresse"
                            value={email}
                            iconClass={FontAwesome5}
                            iconName={'envelope-open'}
                            iconColor={SUCCESS_THEME_COLOR}
                            iconSize={20}
                            iconWidth={40}
                            inputPadding={16}
                            editable={false}
                            autoFocus={true}
                          />

                          <Fumi
                            ref={(input) => { this.tokenInput = input; }}
                            style={{
                              backgroundColor: confirmError ? undefined : BUTTON_BACKGROUND_COLOR,
                              borderColor: ERROR_THEME_COLOR,
                              borderWidth: confirmError ? 0.5 : 0,
                              marginTop: 10,
                            }}
                            labelStyle={confirmError ? { color: ERROR_THEME_COLOR } : undefined}
                            label={tokenLabel}
                            iconClass={FontAwesome5}
                            iconName={'user-secret'}
                            iconColor={confirmError ? ERROR_THEME_COLOR : SUCCESS_THEME_COLOR}
                            iconSize={20}
                            iconWidth={40}
                            inputPadding={16}
                            onChangeText={(token) => this.setState({ token, confirmError: null, loginError: null })}
                            keyboardType={'numeric'}
                            onChangeText={this._handleTokenChange}
                            maxLength={4}
                          />
                      </ScrollView>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this._submitConfirmation.bind(this)}
                disabled={confirmSuccess}
              >
                <Button
                  icon={confirmSuccess ? "check" : undefined}
                  mode="contained"
                  color={confirmSuccess ? SUCCESS_THEME_COLOR : BLUE_THEME_COLOR}
                  style={styles.buttonStyle}
                  loading={this.state.confirmLoading}
                >
                {buttonLabel}
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