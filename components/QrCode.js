

import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-generator';

import {

    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class QrCode extends Component {
    
        state = {
            phoneNumber: this.props.phoneNumber,
            accountState: this.props.accountState,
            QrCodeColor: '',

        };
    

    componentDidMount() {
        let redColor = '#EF2929'
        let orangeColor = '#E26D05'
        let blueColor = '#05AFF7'
        let greenColor = '#41C10C'
        let blackColor = '#000000'
        if (this.state.accountState === 'HEALTHY') {
            this.setState({ QrCodeColor: greenColor })
        }
        if (this.state.accountState === 'CONTAMINATED') {
            this.setState({ QrCodeColor: redColor })
        }
        if (this.state.accountState === 'DEATH'){
            this.setState({QrCodeColor : blackColor})
        }
        if (this.state.accountState === 'CURED'){
            this.setState({QrCodeColor : blueColor})
        }
        if (this.state.accountState === 'SUSPECTED'){
            this.setState({QrCodeColor : orangeColor})
        }
    }


    render() {
        return (
            <View style={styles.qrContainer}>
               
                <QRCode
                    value={this.props.phoneNumber}
                    size={300}
                    bgColor={this.props.QrCodeColor}
                    fgColor='white' />
                <View>
                    
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    qrContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:20
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});



