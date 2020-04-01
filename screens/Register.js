import React from 'react';
import { StyleSheet, Modal, TouchableHighlight, ActivityIndicator, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { Root } from 'native-base';
import axios from 'axios';
import _ from 'lodash';
import DialogInput from 'react-native-dialog-input';
import { isNotEmpty } from '../services/fields.utils';
import cities from '../constants/cities'
import towns from '../constants/towns'

export default class Register extends React.Component {
  state = {
    wilaya: _.map(cities, city => ({ label: city.name, value: city.id })),
    town: [],
    firstName: '',
    lastName: '',
    mail: '',
    cityId: -1,
    townId: -1,
    passWord: '',
    success: false,
    confirmationCodeToken: null,
    isDialogVisible: false,
    error: null,
  }

  _updateTowns(cityId) {
    const townsPerCity = _.filter(towns, town => town.cityId === cityId)
    const listDisplay = _.map(townsPerCity, town => ({ label: town.name, value: town.id }))

    this.setState({
      town: _.sortBy(listDisplay, ['label'])
    })

  }

  componentDidMount() {
    this._loadingData().done()
  }

  _loadingData = async () => {


  }

  _register = () => {
    const { firstName, lastName, email, password, cityId, townId } = this.state
    if (
      isNotEmpty(firstName) &&
      isNotEmpty(lastName) &&
      isNotEmpty(email) &&
      isNotEmpty(password) &&
      isNotEmpty(cityId) &&
      isNotEmpty(townId)
    ) {
      const request = axios.post(
        'https://covidrescue.app/covidrescue-main-backend/pendingAccountRegistration',
        {
          firstName,
          famillyName: lastName,
          email,
          password,
          cityId,
          townId,
        }
      )
      request
        .then(response => {
          this.setState({
            error: undefined,
            success: true,
          })
          this.showDialog(true)
        })
        .catch(error => {
          alert(error)
        })
    } else {
      this.setState({ error: 'Veuillez remplir tous les champs!' })
    }

  }

  _handleTextChange = (fieldId, value) => {
    switch (fieldId) {
      case 1:
        this.setState({ firstName: value, error: undefined })
        break
      case 2:
        this.setState({ lastName: value, error: undefined })
        break
      case 3:
        this.setState({ email: value, error: undefined })
        break
      case 4:
        this.setState({ password: value, error: undefined })
        break
      case 5:
        this.setState({ cityId: value, error: undefined })
        this._updateTowns(value)
        break
      case 6:
        this.setState({ townId: value, error: undefined })
        break
      default:
        this.setState({ error: undefined })
    }
  }
  showDialog(state) {
    this.setState({ isDialogVisible: state });
  }
  _submitConfirmation(inputText) {
    this.setState({ confirmationCodeToken: inputText })
    let mail = this.state.mail
    let token = this.state.confirmationCodeToken
    axios.delete('https://covidrescue.app/covidrescue-main-backend/pendingAccountRegistration', { mail, token })
      .then(Respose => {

      })
      .catch(error => {
        this.setState({ error })
        alert(error)
      })
    if (this.state.error === null) {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
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
              <TextInput placeholder="Nom" style={styles.input} onChangeText={(firstName) => this._handleTextChange(1, firstName)} />
              <TextInput placeholder="Prénom" style={styles.input} onChangeText={(lastName) => this._handleTextChange(2, lastName)} />
              <TextInput placeholder="Adresse E-mail" style={styles.input} onChangeText={(email) => this._handleTextChange(3, email)} />
              <TextInput placeholder="Mot de passe" style={styles.input} secureTextEntry={true} onChangeText={(password) => this._handleTextChange(4, password)} />
              <Dropdown
                style={styles.dropDown}
                label="Wilaya"
                data={this.state.wilaya}
                baseColor='#03AFF7'
                onChangeText={(value) => {
                  this._handleTextChange(5, value)
                }}
              />
              <Dropdown
                style={styles.dropDown}
                label="Commune"
                data={this.state.town}
                baseColor='#03AFF7'
                onChangeText={(value) => this._handleTextChange(6, value)}

              />
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        {this.state.error && (<Text style={styles.errorText}>{this.state.error}</Text>)}
        <TouchableOpacity style={styles.buttonStyle} onPress={this._register}>
          <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
            <Text style={styles.buttonText}>S'inscrire</Text>

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
        </DialogInput>
        {/* 
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.success}
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
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    marginLeft: 22,
    bottom: 30,
    borderRadius: 100,


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