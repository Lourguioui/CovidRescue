import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import QrCode from '../components/QrCode';
import ProfileContent from '../components/ProfileContent';
import { FontAwesome5 } from '@expo/vector-icons';




export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Account: {},
            QrCodeColor: '',
            accountState:''
        }
    }
    componentDidMount() {
        this._loadingAccount()
    }

    _loadingAccount = async () => {
        let redColor = '#EF2929'
        let orangeColor = '#E26D05'
        let blueColor = '#05AFF7'
        let greenColor = '#41C10C'
        let blackColor = '#000000'
        var Account = await AsyncStorage.getItem('account');
        var account = JSON.parse(Account)
        this.setState({ Account: account });
        this.setState({accountState : account.accountState.value})
        
        if (this.state.Account.accountState.key === 'HEALTHY') {
            this.setState({ QrCodeColor: greenColor })
        }
        if (this.state.Account.accountState.key === 'CONTAMINATED') {
            this.setState({ QrCodeColor: redColor })
        }
        if (this.state.Account.accountState.key === 'DEATH') {
            this.setState({ QrCodeColor: blackColor })
        }
        if (this.state.Account.accountState.key === 'CURED') {
            this.setState({ QrCodeColor: blueColor })
        }
        if (this.state.Account.accountState.key === 'SUSPECTED') {
            this.setState({ QrCodeColor: orangeColor })
        }
    }


    render() {
        return (
            <View style={Styles.container}>
               
                <View style={{ flex: 0, backgroundColor: '#0573A0' }}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', margin: 16, marginTop: 30 }} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
                    <QrCode
                        email={this.state.Account.email}
                        
                        QrCodeColor={this.state.QrCodeColor}
                    />
                    <ProfileContent
                        firstName={this.state.Account.firstName}
                        email={this.state.Account.email}
                        lastName={this.state.Account.famillyName}
                        wilaya={this.state.Account.cityId}
                        accountState={this.state.accountState}
                    />
                </ScrollView>
               
            </View>
        );
    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    qrContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
})