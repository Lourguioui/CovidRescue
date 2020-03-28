

import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-generator';

import {

    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class QrCode extends Component {
    
        state = {
            email: this.props.email,
            accountState: this.props.accountState,
            QrCodeColor: '',

        };
    

    componentDidMount() {
    
        
    }


    render() {
        return (
            <View style={styles.qrContainer}>
               
                <QRCode
                    value={this.props.email}
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



