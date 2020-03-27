import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import QrCode from '../components/QrCode';
import QRCode from 'react-native-qrcode-generator';



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Account: {

            },
            QrCodeColor: '',
        }
    }
    componentDidMount() {
        // let redColor = '#EF2929'
        // let orangeColor = '#E26D05'
        // let blueColor = '#05AFF7'
        // let greenColor = '#41C10C'
        // let blackColor = '#000000'
        this._loadingAccount()
        // if (this.state.Account.accountState == 'HEALTHY') {
        //     this.setState({ QrCodeColor: greenColor })
        // }
        // if (this.state.Account.accountState == 'CONTAMINATED') {
        //     this.setState({ QrCodeColor: redColor })
        // }
        // if (this.state.Account.accountState == 'DEATH'){
        //     this.setState({QrCodeColor : blackColor})
        // }
        // if (this.state.Account.accountState == 'CURED'){
        //     this.setState({QrCodeColor : blueColor})
        // }
        // if (this.state.Account.accountState == 'SUSPECTED'){
        //     this.setState({QrCodeColor : orangeColor})
        // }
    }
    _loadingAccount = async () => {
        let redColor = '#EF2929'
        let orangeColor = '#E26D05'
        let blueColor = '#05AFF7'
        let greenColor = '#41C10C'
        let blackColor = '#000000'
        var Account = await AsyncStorage.getItem('account');
        var account = JSON.parse(Account);
        this.setState({ Account: account });
        alert(this.state.Account.phoneNumber);
        if (this.state.Account.accountState === 'HEALTHY') {
            this.setState({ QrCodeColor: greenColor })
        }
        if (this.state.Account.accountState === 'CONTAMINATED') {
            this.setState({ QrCodeColor: redColor })
        }
        if (this.state.Account.accountState === 'DEATH'){
            this.setState({QrCodeColor : blackColor})
        }
        if (this.state.Account.accountState === 'CURED'){
            this.setState({QrCodeColor : blueColor})
        }
        if (this.state.Account.accountState === 'SUSPECTED'){
            this.setState({QrCodeColor : orangeColor})
        }

    }
    // _qrColorHandler(){
    //     let redColor = '#EF2929'
    //     let orangeColor = '#E26D05'
    //     let blueColor = '#05AFF7'
    //     let greenColor = '#41C10C'
    //     let blackColor = '#000000'
    //     if (this.state.Account.accountState === 'HEALTHY') {
    //         this.setState({ QrCodeColor: greenColor })
    //     }
    //     if (this.state.Account.accountState === 'CONTAMINATED') {
    //         this.setState({ QrCodeColor: redColor })
    //     }
    //     if (this.state.Account.accountState === 'DEATH'){
    //         this.setState({QrCodeColor : blackColor})
    //     }
    //     if (this.state.Account.accountState === 'CURED'){
    //         this.setState({QrCodeColor : blueColor})
    //     }
    //     if (this.state.Account.accountState === 'SUSPECTED'){
    //         this.setState({QrCodeColor : orangeColor})
    //     }
    // }

    render() {
        return (
            <View style={Styles.container}>
                <QrCode
                    phoneNumber={this.state.Account.phoneNumber}
                    accountState={this.state.Account.accountState}
                    QrCodeColor={this.state.QrCodeColor}
                />
            </View>
        );
    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        

    },
    qrContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
})