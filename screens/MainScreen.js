import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import TableRow from '../components/TableRow';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';


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
        // axios.get('https://covidrescue-2.herokuapp.com/analysis/findAllOneLineCityStateCount')
        //     .then(Response => {

        //         this.setState({ stats: Response.data });
        //         console.log(this.state.stats);
        //     })
    }

    _loadData = async () => {
        await axios.get('https://covidrescue-2.herokuapp.com/analysis/findAllOneLineCityStateCount')
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