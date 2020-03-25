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
                { id: 1, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 2, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 3, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 4, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 5, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 6, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 7, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 8, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 9, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 10, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 11, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 12, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 13, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 14, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
                { id: 15, wilaya: 'djlfa', contaminated: '5', suspected: '100',death:'10',cured:'4',healthy:'3500'},
            ]
        }
    }
    componentDidMount(){
        axios.get('https://covidrescue-2.herokuapp.com/analysis/findAllOneLineCityStateCount')
        .then(Response => {
            console.log(JSON.stringify(Response));
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
                <View style={styles.smallContainer}>
                    <Text style={styles.info}>Wilaya</Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#E26D05" /></Text>
                </View>
                <View style={styles.smallContainer}>
                    <Text style={styles.info}><FontAwesome5 name="stop-circle" size={24} color="#EF2929" /></Text>
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
                            key={stats.id}
                            wilaya={stats.wilaya}
                            contaminated={stats.contaminated}
                            suspected={stats.suspected}
                            death={stats.death}
                            cured={stats.cured}
                            healthy={stats.healthy}
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
        alignContent:'center',
        
    },
    tabContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent:'center',
        
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
        borderBottomColor :'#00000009',
        borderBottomWidth:1,
        width:'90%',
        left:'5%',
        right:'5%',
    },
    smallContainer:{
        flex:1,
        alignItems:'center',
        height: 60,
        justifyContent:'center'
    },
    info:{
        textAlign:'center'
    }
})