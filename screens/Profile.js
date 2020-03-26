import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import QrCode from '../components/QrCode';



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Account: {

            }
        }
    }
    componentDidMount() {
        this._loadingAccount().done();
    }
    _loadingAccount = async () => {
        var Account = await AsyncStorage.getItem('account');
        var account = JSON.parse(Account);
        this.setState({ Account: account });

    }

    render() {
        return (
            <View style={Styles.container}>
                <QrCode
                    phoneNumber={this.state.Account.phoneNumber}
                    accountState={this.state.Account.accountState}
                />
            </View>
        );
    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        

    }
})