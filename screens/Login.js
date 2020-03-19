import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
export default class Login extends React.Component {
    state = {
        wilaya: [
            { label: 'Adrar', value: 'Adrar' },
            { label: 'Chlef', value: 'Chlef' },
            { label: 'Laghouat', value: 'Laghouat' },
            { label: 'Oum El Bouaghi', value: 'Oum El Bouaghi' },
            { label: 'Batna', value: 'Batna' },
            { label: 'Béjaia', value: 'Béjaia' },
            { label: 'Biskra', value: 'Biskra' },
            { label: 'Béchar', value: 'Béchar' },
            { label: 'Blida', value: 'Blida' },
            { label: 'Bouira', value: 'Bouira' },
            { label: 'Tamanrasset', value: 'Tamanrasset' },
            { label: 'Tébessa', value: 'Tébessa' },
            { label: 'Tlemcen', value: 'Tlemcen' },
            { label: 'Tiaret', value: 'Tiaret' },
            { label: 'Tizi Ouzou', value: 'Tizi Ouzou' },
            { label: 'Alger', value: 'Alger' },
            { label: 'Djelfa', value: 'Djelfa' },
            { label: 'Jijel', value: 'Jijel' },
            { label: 'Adrar', value: 'football' },
            { label: ' Sétif', value: ' Sétif' },
            { label: 'Saïda', value: 'Saïda' },
            { label: 'Skikda', value: 'Skikda' },
            { label: 'Sidi Bel Abbès', value: 'Sidi Bel Abbès' },
            { label: 'Annaba', value: 'Annaba' },
            { label: 'Guelma', value: 'Guelma' },
            { label: 'Constantine', value: 'Constantine' },
            { label: 'Médéa', value: 'Médéa' },
            { label: 'Mostaganem', value: 'Mostaganem' },
            { label: "M'Sila", value: "M'Sila" },
            { label: 'Mascara', value: 'Mascara' },
            { label: 'Ouargla ', value: 'Ouargla ' },
            { label: 'Oran', value: 'Oran' },
            { label: 'El Bayadh', value: 'El Bayadh' },
            { label: 'Illizi', value: 'Illizi' },
            { label: 'Bordj Bou Arreridj', value: 'Bordj Bou Arreridj' },
            { label: 'Boumerdès', value: 'Boumerdès' },
            { label: 'El Tarf', value: 'El Tarf' },
            { label: 'Tindouf', value: 'Tindouf' },
            { label: 'Tissemsilt', value: 'Tissemsilt' },
            { label: 'El Oued ', value: 'El Oued ' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Khenchela', value: 'Khenchela' },
            { label: 'Souk Ahras', value: 'Souk Ahras' },
            { label: 'Mila', value: 'Mila' },
            { label: 'Aïn Defla', value: 'Aïn Defla' },
            { label: 'Naâma', value: 'Naâma' },
            { label: 'Témouchent', value: 'Témouchent' },
            { label: 'Ghardaïa', value: 'Ghardaïa' },
            { label: 'Relizane', value: 'Relizane' },
            { label: "El M'Ghair", value: "El M'Ghair" },
            { label: 'El Meniaa', value: 'El Meniaa' },
            { label: 'Ouled Djellal ', value: 'Ouled Djellal ' },
            { label: 'Bordj Baji Mokhtar ', value: 'Bordj Baji Mokhtar ' },
            { label: 'Béni Abbès ', value: 'Béni Abbès ' },
            { label: 'Timimoun ', value: 'Timimoun ' },
            { label: 'Touggourt ', value: 'Touggourt ' },
            { label: 'Djanet', value: 'Djanet' },
            { label: 'In Salah', value: 'In Salah' },
            { label: 'In Guezzam', value: 'In Guezzam' },

        ]
    }
    render() {
        return (
            <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>

                        <ScrollView style={styles.formContainer}>
                            <View style={styles.logoContainer}>
                                <Image source={require('../assets/Covid_logo.png')} />

                            </View>
                            <TextInput placeholder="Nom" style={styles.input} />
                            <TextInput placeholder="Prénom" style={styles.input} />
                            <TextInput placeholder="Téléphone" style={styles.input} keyboardType={'numeric'} />
                            <Dropdown
                                style={styles.dropDown}
                                label="Wilaya"
                                data={this.state.wilaya}
                                baseColor='#03AFF7'
                                textColor='#fff'
                                itemColor='#fff'

                            />
                            <TextInput placeholder="Commune" style={styles.input} />
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <TouchableOpacity ></TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:0
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        height: 150,
        flex: 1,
        paddingBottom:0,
        

    },
    formContainer: {
        position: 'absolute',


        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        marginBottom: 20,

    },
    input: {
        height: 50,
        marginBottom: 10,
        backgroundColor: 'white',
        borderColor: '#03AFF7',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 25
    },
    dropDown: {
        borderColor: '#03AFF7',
        marginBottom:10,
    },

})