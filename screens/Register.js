import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Root } from 'native-base';
import axios from 'axios';
import _ from 'lodash';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import cities from '../constants/cities'
import towns from '../constants/towns'
import { isEmailValid, isPasswordValid, isNotValidName, isNotEmpty } from '../services/fields.utils';
import { Snackbar } from 'react-native-paper';
import { Fumi } from 'react-native-textinput-effects';
import { Button } from 'react-native-paper';
import { getErrorMessage } from '../services/errors.utils.js'
import { BLUE_THEME_COLOR, ERROR_THEME_COLOR, BUTTON_BACKGROUND_COLOR } from '../constants/theme';

export default class Register extends React.Component {
  state = {
    wilaya: _.map(cities, city => ({ label: city.name, value: city.id })),
    town: [],
    firstName: '',
    familyName: '',
    email: '',
    password: '',
    confirmationCodeToken: null,
    isDialogVisible: false,
    confirmationError: null,
    showTowns: false,
  }

  _updateTowns(cityId) {
    const townsPerCity = _.filter(towns, town => town.cityId === cityId)
    const listDisplay = _.map(townsPerCity, town => ({ label: town.name, value: town.id }))
    const sortedList = _.sortBy(listDisplay, ['label'])
    this.setState({
      town: sortedList,
      townId: undefined,
      showTowns: false,
    })
    setTimeout(() => this.setState({
      showTowns: true,
    }), 100)
  }
  _checkInputsValidity = (state) => {
    const { firstName, familyName, email, password, cityId, townId } = this.state
    const newState = {}
    if (!isNotEmpty(familyName) || isNotValidName(familyName)) {
      const invalidChars = isNotValidName(familyName)
      newState.familyNameError = !isNotEmpty(familyName) ? 'Ce champ est obligatoire' : `Caractères non valid: ${invalidChars}`
    }
    if (!isNotEmpty(firstName) || isNotValidName(firstName)) {
      const invalidChars = isNotValidName(firstName)
      newState.firstNameError = !isNotEmpty(firstName) ? 'Ce champ est obligatoire' : `Caractères non valid: ${invalidChars}`
    }
    if (!isEmailValid(email)) {
      newState.emailError = 'Adresse email non valide!'
    }
    if (!isPasswordValid(password)) {
      newState.passwordError = '6 caractères minimum'
    }
    if (!isNotEmpty(cityId)) {
      newState.wilayaError = 'Ce champ est obligatoire'
    }
    if (!isNotEmpty(townId)) {
      newState.townError = 'Ce champ est obligatoire'
    }
    if (Object.keys(newState).length > 0) {
      this.setState({ ...newState })
      return false
    }
    return true
  }

  _onDismissSnackBar = () => this.setState({ registrationError: null });

  _register = () => {
    if (this._checkInputsValidity(this.state)) {
      this.setState({ registrationLoading: true })
      const { firstName, familyName, email, password, cityId, townId } = this.state
      const request = axios.post(
        'https://covidrescue.app/covidrescue-main-backend/pendingAccountRegistration',
        {
          firstName,
          famillyName: familyName,
          email,
          password,
          cityId,
          townId,
        }
      )
      request
        .then(response => {
          this.setState({
            registrationError: null,
            registrationSuccess: true,
            registrationLoading: false,
          })
          this.props.navigation.navigate('Confirm', { email: email })
        })
        .catch(error => {
          const errorMessage = getErrorMessage(error) || 'Une erreur s\'est produite, veuillez réessayer plus tard!'
          this.setState({
            registrationError: errorMessage,
            registrationSuccess: false,
            registrationLoading: false,
          })
        })
    }
  }

  _handleTextChange = (fieldId, value) => {
    switch (fieldId) {
      case 1:
        this.setState({ firstName: value, firstNameError: null, registrationError: null })
        break
      case 2:
        this.setState({ familyName: value, familyNameError: null, registrationError: null })
        break
      case 3:
        this.setState({ email: value, emailError: null, registrationError: null })
        break
      case 4:
        this.setState({ password: value, passwordError: null, registrationError: null })
        break
      case 5:
        this.setState({ cityId: value, wilayaError: null, registrationError: null })
        this._updateTowns(value)
        break
      case 6:
        this.setState({ townId: value, townError: null, registrationError: null })
        break
      default:
        this.setState({ registrationError: null })
    }
  }
  showDialog(state) {
    this.setState({ isDialogVisible: state });
  }

  render() {
    const { firstNameError, familyNameError, emailError, passwordError, wilayaError, townError } = this.state
    const familyNameLabel = familyNameError || 'Nom'
    const firstNameLabel = firstNameError || 'Prénom'
    const emailLabel = emailError || 'Adresse e-mail'
    const passwordLabel = passwordError || 'Mot de passe'
    const wilayaLabel = wilayaError || 'Wilaya'
    const townLabel = townError || "Commune"

    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <View style={styles.mainContainer}>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ScrollView style={styles.formContainer}>
              <View style={styles.logoContainer}>
                <Image source={require('../assets/Covid_logo.png')} />

              </View>
              <Fumi
                style={{
                  backgroundColor:familyNameError ? undefined : BUTTON_BACKGROUND_COLOR,
                  borderColor: ERROR_THEME_COLOR,
                  borderWidth: familyNameError ? 0.5 : 0,
                  marginTop: 10,
                }}
                labelStyle={familyNameError ? { color: ERROR_THEME_COLOR } : undefined}
                label={familyNameLabel}
                iconClass={FontAwesome5}
                iconName={'user'}
                iconColor={familyNameError ? ERROR_THEME_COLOR : BLUE_THEME_COLOR}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                onChangeText={(familyName) => this._handleTextChange(2, familyName)}
                onSubmitEditing={() => { this.firstNameRef.focus(); }}
                blurOnSubmit={false}
              />
              <Fumi
                ref={(input) => { this.firstNameRef = input; }}
                style={{
                  backgroundColor: firstNameError ? undefined : BUTTON_BACKGROUND_COLOR,
                  borderColor: ERROR_THEME_COLOR,
                  borderWidth: firstNameError ? 0.5 : 0,
                  marginTop: 10,
                }}
                labelStyle={firstNameError ? { color: ERROR_THEME_COLOR } : undefined}
                label={firstNameLabel}
                iconClass={FontAwesome5}
                iconName={'user'}
                iconColor={firstNameError ? ERROR_THEME_COLOR : BLUE_THEME_COLOR}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                onChangeText={(firstName) => this._handleTextChange(1, firstName)}
                onSubmitEditing={() => { this.emailRef.focus(); }}
                blurOnSubmit={false}
              />
              <Fumi
                ref={(input) => { this.emailRef = input; }}
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
                onChangeText={(email) => this._handleTextChange(3, email)}
                onSubmitEditing={() => { this.passwordRef.focus(); }}
                blurOnSubmit={false}
              />
              <Fumi
                ref={(input) => { this.passwordRef = input; }}
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
                onChangeText={(password) => this._handleTextChange(4, password)}
                onSubmitEditing={() => { this.wilayaRef.focus(); }}
                blurOnSubmit={false}
              />
              
              {/* <TextInput placeholder="Nom" style={styles.input} onChangeText={(firstName) => this._handleTextChange(1, firstName)} />
              <TextInput placeholder="Prénom" style={styles.input} onChangeText={(familyName) => this._handleTextChange(2, familyName)} />
              <TextInput placeholder="Adresse E-mail" style={styles.input} onChangeText={(email) => this._handleTextChange(3, email)} />
              <TextInput placeholder="Mot de passe" style={styles.input} secureTextEntry={true} onChangeText={(password) => this._handleTextChange(4, password)} /> */}
              <Dropdown
                ref={(input) => { this.wilayaRef = input; }}
                style={styles.dropDown}
                label={wilayaLabel}
                data={this.state.wilaya}
                baseColor={wilayaError ? ERROR_THEME_COLOR : BLUE_THEME_COLOR}
                onChangeText={(value) => {
                  this._handleTextChange(5, value)
                }}
                onSubmitEditing={() => { this.townRef.focus(); }}
                blurOnSubmit={false}
              />
              {
                this.state.showTowns && (
                  <Dropdown
                    ref={(input) => { this.townRef = input; }}
                    label={townLabel}
                    style={{ borderColor: ERROR_THEME_COLOR }}
                    data={this.state.town}
                    value={this.state.townId}
                    baseColor={townError ? ERROR_THEME_COLOR : BLUE_THEME_COLOR}
                    onChangeText={(value) => this._handleTextChange(6, value)}
                  />
                )
              }
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => this.props.navigation.navigate('Confirm', { email: 'chouaib.hamek@gmail.com' }) }
          onPress={this._register}
        >
          <Button
            icon="account-plus"
            mode="contained"
            color={BLUE_THEME_COLOR}
            style={styles.buttonStyle}
            loading={this.state.registrationLoading}
          >
            S'inscrir
          </Button>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Button
            icon="login"
            mode="outlined"
            color={BLUE_THEME_COLOR}
            style={styles.buttonStyle}
          >
            S'identifier
          </Button>
        </TouchableOpacity>
        <Snackbar
          visible={this.state.registrationError}
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
          {this.state.registrationError}
        </Snackbar>
        {/* {this.state.error && (<Text style={styles.errorText}>{this.state.error}</Text>)} */}
        {/* <TouchableOpacity style={styles.buttonStyle} onPress={this._register}>
          <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
            <Text style={styles.buttonText}>S'inscrir</Text>

          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.textStyle}>Vous avez un compte? S'identifier</Text>
        </TouchableOpacity>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={"DialogInput 1"}
          submitText={"S'identifier"}
          cancelText={"Annuler"}
          message={"Message for DialogInput #1"}
          hintInput={"HINT INPUT"}
          submitInput={(inputText) => { this._submitConfirmation(inputText) }}
          closeDialog={() => { this.showDialog(false) }}>
        </DialogInput> */}
        {/* 
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.registrationSuccess}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={{ ...styles.modalText, color: 'green' }}>l'inscription a été effectué avec succès.</Text>
                    <Text style={styles.modalText}>Un e-mail de confirmation vous sera envoyé dans un instant.</Text>

                    <TouchableHighlight
                      style={styles.openButton}
                      onPress={() => this.props.navigation.navigate('Login')}
                    >
                      <Text style={styles.textStyle}>S'identifier</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  loginButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  errorText: {
    color: 'red',
    marginBottom: 40,
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 0,
    marginBottom: '1%',
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
    height: 100,
    flex: 1,
    paddingBottom: 0,
    top: 40,


  },
  formContainer: {
    position: 'absolute',


    left: 0,
    right: 0,
    bottom: 0,
    top: 10,
    paddingHorizontal: 20,
    marginBottom: 40,

  },
  input: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: '#03AFF7',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 25
  },
  dropDown: {
    borderColor: '#03AFF7',

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
    borderRadius: 100,


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
    bottom: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',

  }


})