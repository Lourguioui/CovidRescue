import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import TableRow from '../components/TableRow';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: [

            ]
        }
    }
    componentDidMount() {
        this._loadData().done(); 
    }

    _loadData = async () => {
        await axios.get('https://covidrescue.app/covidrescue-main-backend/analysis/findAllOneLineCityStateCount')
            .then(Response => {
                this.setState({ stats: Response.data })
            })

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0, backgroundColor: '#0573A0' }}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', margin: 16, marginTop: 30 }} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.wilayaContainer}>   
                        <Text style={styles.info, {
                            left: -10, textAlign: 'center',
                            fontFamily: 'Roboto',
                            fontSize: 20,
                        }}>Wilaya</Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#EF2929" /></Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#E26D05" /></Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#000000" /></Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#05AFF7" /></Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#41C10C" /></Text>
                    </View>
                </View>

                <ScrollView style={styles.tabContainer}>
                    {this.state.stats.map(stats => (
                        <TableRow
                            key={stats.city.id}
                            wilaya={stats.city.name}
                            contaminated={stats.stateCountMap.CONTAMINATED}
                            suspected={stats.stateCountMap.SUSPECTED}
                            death={stats.stateCountMap.DEAD}
                            cured={stats.stateCountMap.CURED}
                            healthy={stats.stateCountMap.HEALTHY}
                        />
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('QrScanner')}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        position: 'absolute',
                        bottom: 10,
                        right: '3%',
                        zIndex:200,
                        elevation:20,
                        height: 60,

                        borderRadius: 100,
                    }}
                >
                    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
                        <Image source={require("../assets/Qr.png")} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',

    },
    tabContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.7,

        paddingHorizontal: 10,
        shadowRadius: 1,
        elevation: 10,


    },
    headerContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: '#00000009',
        borderBottomWidth: 1,
        width: '90%',
        left: '5%',
        right: '5%',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 100,
        zIndex:200
    },
    wilayaContainer: {
        flex: 1.5,
        alignItems: 'center',
        height: 60,
        justifyContent: 'center'
    },
    smallContainer: {
        flex: 1,
        alignItems: 'center',
        height: 60,
        justifyContent: 'center'
    },
    info: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 40,

    }
})